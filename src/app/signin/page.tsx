
"use client";

import React, { useState } from "react";
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

const SignInPage = () => {
  const router = useRouter();

  const handleSubmitInfo = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/profile",
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("সফলভাবে সাইন ইন হয়েছে!");
    router.push("/profile");
  };

  const HandleGoogleSignIn = async () => {
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/profile",
    });

    if (error) {
      toast.error(error.message);
    }
  };

  const HandleGithubSignIn = async () => {
    const { error } = await authClient.signIn.social({
      provider: "github",
      callbackURL: "/profile",
    });

    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="my-20 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-5 shadow-lg sm:p-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            সাইন ইন
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে
            অ্যাকাউন্টে ঢুকুন।
          </p>
        </div>

        {/* Email Sign In */}
        <Form
          className="flex flex-col gap-5"
          onSubmit={handleSubmitInfo}
        >
          <TextField
            isRequired
            name="email"
            type="email"
            className="w-full"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                  value,
                )
              ) {
                return "সঠিক ইমেইল ঠিকানা লিখুন";
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
            minLength={8}
            name="password"
            type="password"
            className="w-full"
            validate={(value) => {
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
              placeholder="আপনার পাসওয়ার্ড লিখুন"
              className="w-full"
            />

            <Description>
              কমপক্ষে ৮টি অক্ষর থাকতে হবে। এর মধ্যে
              অন্তত ১টি বড় হাতের ইংরেজি অক্ষর এবং
              ১টি সংখ্যা থাকতে হবে।
            </Description>

            <FieldError />
          </TextField>

          <div className="flex w-full gap-3 pt-2">
            <Button type="submit" className="flex-1 bg-green-700">
              <Check />
              সাইন ইন
            </Button>
          </div>
        </Form>

        {/* Social Sign In */}
        <div className="divider my-4 text-xs">অথবা</div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button
            type="button"
            variant="secondary"
            className="w-full"
            onClick={HandleGoogleSignIn}
          >
            Google দিয়ে চালিয়ে যান
          </Button>

          <Button
            type="button"
            variant="secondary"
            className="w-full"
            onClick={HandleGithubSignIn}
          >
            GitHub দিয়ে চালিয়ে যান
          </Button>
        </div>

        {/* Sign Up */}
        <div className="mt-6 border-t border-gray-100 pt-5 text-center">
          <p className="text-sm text-gray-500">
            অ্যাকাউন্ট নেই?{" "}
            <button
              type="button"
              onClick={() => router.push("/signup")}
              className="font-semibold text-green-700 hover:text-green-900 hover:underline"
            >
              সাইন আপ করুন
            </button>
          </p>
        </div>

       
      </div>
      
    </div>
  );
};

export default SignInPage;
