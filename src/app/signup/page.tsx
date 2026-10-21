"use client";

import React from "react";
import { Check } from "@gravity-ui/icons";
import {
      Button,
      Description,
      FieldError,
      Form,
      Input,
      Label,
      TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
      const router = useRouter();

      const handleSubmitInfo = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            const formData = new FormData(e.currentTarget);

            const data = Object.fromEntries(formData.entries()) as {
                  name: string;
                  email: string;
                  password: string;
            };

            const { data: signUpData, error } = await authClient.signUp.email({
                  name: data.name,
                  email: data.email,
                  password: data.password,
                  callbackURL: "/profile",
            });

            console.log(signUpData, error);

            if (error) {
                  toast.error(error.message);
                  return;
            }

            toast.success("আপনার অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!");
            router.push("/profile");
      };
      const HandleGoogleSignIn = async () => {
                  const data = await authClient.signIn.social({
                        provider: "google",
                  });
            };
                  const HandleGithubSignIn = async () => {
                  const data = await authClient.signIn.social({
                        provider: "github",
                  });
            };

      return (
            <div className="my-10 flex items-center justify-center  px-4">
                  <div className="w-full max-w-lg rounded-2xl border border-green-100 bg-white p-6 shadow-xl sm:p-8">
                        {/* Header */}
                        <div className="mb-8 text-center">
                              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl  text-green-700">
                                    <Check width={32} height={32} />
                              </div>

                              <h1 className="text-3xl font-bold tracking-tight text-green-800">
                                    অ্যাকাউন্ট তৈরি করুন
                              </h1>

                              <p className="mt-2 text-sm leading-6 text-gray-500">
                                    আপনার অ্যাকাউন্ট তৈরি করুন এবং বাজারদরের
                                    বিস্তারিত তথ্য উপভোগ করুন।
                              </p>
                        </div>

                        {/* Form */}
                        <Form
                              className="flex flex-col gap-5"
                              onSubmit={handleSubmitInfo}
                        >
                              <TextField
                                    isRequired
                                    name="name"
                                    type="text"
                                    className="w-full"
                              >
                                    <Label>নাম</Label>
                                    <Input
                                          placeholder="যেমন: রহিম উদ্দিন"
                                          className="w-full"
                                    />
                                    <FieldError />
                              </TextField>

                              <TextField
                                    isRequired
                                    name="email"
                                    type="email"
                                    className="w-full"
                                    validate={value => {
                                          if (
                                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                                      value,
                                                )
                                          ) {
                                                return "Please enter a valid email address";
                                          }

                                          return null;
                                    }}
                              >
                                    <Label>ইমেইল</Label>
                                    <Input
                                          placeholder="abc@mail.com"
                                          className="w-full"
                                    />
                                    <FieldError />
                              </TextField>

                              <TextField
                                    isRequired
                                    name="password"
                                    type="password"
                                    minLength={8}
                                    className="w-full"
                                    validate={value => {
                                          if (value.length < 8) {
                                                return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে";
                                          }

                                          if (!/[A-Z]/.test(value)) {
                                                return "অন্তত ১টি বড় হাতের ইংরেজি অক্ষর দিন";
                                          }

                                          if (!/[0-9]/.test(value)) {
                                                return "অন্তত ১টি সংখ্যা দিন";
                                          }

                                          return null;
                                    }}
                              >
                                    <Label>পাসওয়ার্ড</Label>
                                    <Input
                                          placeholder="Create a strong password"
                                          className="w-full"
                                    />
                                    <Description>
                                          কমপক্ষে ৮টি অক্ষর, ১টি বড় হাতের
                                          ইংরেজি অক্ষর এবং ১টি সংখ্যা ব্যবহার
                                          করুন।
                                    </Description>
                                    <FieldError />
                              </TextField>

                              <Button
                                    type="submit"
                                    className="mt-2 w-full bg-green-700 text-white hover:bg-green-800"
                              >
                                    <Check width={18} height={18} />
                                    অ্যাকাউন্ট তৈরি করুন
                              </Button>
                        </Form>

                        <div className="divider my-4 text-xs">অথবা</div>
                                                <div className="flex gap-3 mt-7">
                                                      <Button
                                                            type="submit"
                                                            variant="secondary"
                                                            className="w-full"
                                                            onClick={HandleGoogleSignIn}
                                                      >
                                                       Google দিয়ে চালিয়ে যান
                                                      </Button>
                                                      <Button
                                                            type="submit"
                                                            variant="secondary"
                                                            className="w-full"
                                                            onClick={HandleGithubSignIn}
                                                      >
                                                           Github দিয়ে চালিয়ে যান
                                                      </Button>
                                                </div>

                        {/* Footer */}
                        <div className="mt-6 border-t border-gray-100 pt-5 text-center">
                              <p className="text-sm text-gray-500">
                                    অ্যাকাউন্ট আছে?{" "}
                                    <button
                                          type="button"
                                          onClick={() =>
                                                router.push("/signin")
                                          }
                                          className="font-semibold text-green-700 hover:text-green-900 hover:underline"
                                    >
                                          সাইন ইন করুন
                                    </button>
                              </p>
                        </div>
                  </div>
            </div>
      );
};

export default SignUpPage;
