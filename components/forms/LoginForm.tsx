"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

import { FormInput } from "@/components/inputs/FormInput";

import { login as loginUser } from "@/actions/api";
import { LoginFormData, loginValidationSchema } from "@/utils/validation/login";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginValidationSchema),
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    setErrorMessage(null);

    const { accessToken } = await loginUser(data);
    console.log(accessToken);

    if (accessToken) {
      document.cookie = `token=${accessToken}; path=/;  SameSite=Lax`;
      router.push("/");
    } else {
      setErrorMessage("error");
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 flex justify-center items-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <FormInput
            name="username"
            placeholder="Username"
            register={register}
            error={errors.username?.message}
          />
          <FormInput
            name="name"
            placeholder="Name"
            register={register}
            error={errors.name?.message}
          />
          <FormInput
            name="password"
            type="password"
            placeholder="Password"
            register={register}
            error={errors.password?.message}
          />

          {errorMessage && (
            <p className="text-sm text-red-500">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>

        <div className="text-center text-sm text-gray-600 mt-4">
          Do not have an account?
          <Link href="/register" className="text-blue-500 hover:underline ml-1">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};
