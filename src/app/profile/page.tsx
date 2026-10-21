"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ProfilePage = () => {
      const router = useRouter();
      const { data: userData, isPending } = authClient.useSession();

      const [loading, setLoading] = useState(false);
      const [name, setName] = useState("");

      const user = userData?.user;

      const HandleUpdateProfile = async (
            e: React.FormEvent<HTMLFormElement>,
      ) => {
            e.preventDefault();

            if (!name.trim()) return;

            try {
                  setLoading(true);

                  const { error } = await authClient.updateUser({
                        name: name.trim(),
                  });

                  if (error) {
                        console.error("Profile update failed:", error.message);
                        return;
                  }

                  setName("");
                  router.refresh();
            } catch (error) {
                  console.error("Something went wrong:", error);
            } finally {
                  setLoading(false);
            }
      };

      if (isPending) {
            return (
                  <div className="flex min-h-[60vh] items-center justify-center">
                        <span className="loading loading-spinner loading-lg text-success"></span>
                  </div>
            );
      }

      if (!user) {
            return (
                  <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
                        <h2 className="text-2xl font-bold">
                              Please Sign In
                        </h2>
                        <button
                              onClick={() => router.push("/sign-in")}
                              className="btn btn-success text-white"
                        >
                              Sign In
                        </button>
                  </div>
            );
      }

      return (
            <section className="container mx-auto px-4 py-10">
                  <h1 className="mb-10 text-center text-3xl font-bold md:text-4xl">
                         Profile
                  </h1>

                  <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-6 md:grid-cols-2">
                        {/* Left Side: Profile Card */}
                        <div className="card border border-base-300 bg-base-100 shadow-xl">
                              <div className="card-body items-center">
                                    {/* Avatar */}
                                    <div className="avatar placeholder">
                                          <div className="w-24 rounded-full bg-success text-success-content">
                                                <span className="text-3xl font-bold">
                                                      {user.name
                                                            ?.charAt(0)
                                                            .toUpperCase() ||
                                                            "U"}
                                                </span>
                                          </div>
                                    </div>

                                    <h2 className="mt-3 text-2xl font-bold capitalize">
                                          {user.name}
                                    </h2>

                                    <p className="break-all text-base-content/60">
                                          {user.email}
                                    </p>

                                    <div className="divider my-2"></div>

                                    <div className="w-full space-y-5">
                                          {/* Full Name */}
                                          <div>
                                                <p className="text-sm text-base-content/60">
                                                      Full Name
                                                </p>
                                                <p className="font-semibold capitalize">
                                                      {user.name}
                                                </p>
                                          </div>

                                          {/* Email */}
                                          <div>
                                                <p className="text-sm text-base-content/60">
                                                      Email Address
                                                </p>
                                                <p className="break-all font-semibold">
                                                      {user.email}
                                                </p>
                                          </div>

                                          {/* Verification */}
                                          <div>
                                                <p className="mb-1 text-sm text-base-content/60">
                                                      Email Verification
                                                </p>

                                                <span
                                                      className={`badge ${
                                                            user.emailVerified
                                                                  ? "badge-success"
                                                                  : "badge-warning"
                                                      }`}
                                                >
                                                      {user.emailVerified
                                                            ? "Verified"
                                                            : "Not Verified"}
                                                </span>
                                          </div>

                                          {/* Created At */}
                                          <div>
                                                <p className="text-sm text-base-content/60">
                                                      Member Since
                                                </p>
                                                <p className="font-semibold">
                                                      {new Date(
                                                            user.createdAt,
                                                      ).toLocaleDateString(
                                                            "en-GB",
                                                            {
                                                                  day: "numeric",
                                                                  month: "long",
                                                                  year: "numeric",
                                                            },
                                                      )}
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        {/* Right Side: Update Form */}
                        <div className="card border border-base-300 bg-base-100 shadow-xl">
                              <div className="card-body">
                                    <h2 className="card-title mb-2 text-2xl">
                                          Update Your Profile
                                    </h2>

                                    <p className="mb-4 text-sm text-base-content/60">
                                          Update your personal information below.
                                    </p>

                                    <form onSubmit={HandleUpdateProfile}>
                                          <fieldset className="fieldset">
                                                <legend className="fieldset-legend">
                                                      Full Name
                                                </legend>

                                                <input
                                                      type="text"
                                                      name="name"
                                                      value={name}
                                                      onChange={(e) =>
                                                            setName(
                                                                  e.target.value,
                                                            )
                                                      }
                                                      className="input w-full"
                                                      placeholder={user.name}
                                                      required
                                                />
                                          </fieldset>

                                          

                                          <button
                                                type="submit"
                                                disabled={
                                                      loading ||
                                                      !name.trim() ||
                                                      name.trim() === user.name
                                                }
                                                className="btn mt-6 w-full border-0 bg-green-700 text-white hover:bg-green-800"
                                          >
                                                {loading ? (
                                                      <>
                                                            <span className="loading loading-spinner loading-sm"></span>
                                                            Updating...
                                                      </>
                                                ) : (
                                                      "Update Profile"
                                                )}
                                          </button>
                                    </form>
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default ProfilePage;