"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

import { FormInput } from "@/components/FormInput";
import { Button } from "@/components/Button";
import { BUTTON_VARIANTS } from "@/components/Button/constants";
import { Typography } from "@/components/Typography";
import { TYPOGRAPHY_VARIANTS } from "@/components/Typography/constants";

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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    setErrorMessage(null);
    setIsLoading(true);

    const { accessToken } = await loginUser(data);

    if (accessToken) {
      document.cookie = `token=${accessToken}; path=/;  SameSite=Lax`;
      setIsLoading(false);

      router.push("/");
    } else {
      setErrorMessage("error");
      setIsLoading(false);
    }
  };

  return (
    <div className="w-115 p-8 bg-white rounded-lg shadow-xl">
      <Typography
        className="mb-6"
        text="Login to Your Account"
        variant={TYPOGRAPHY_VARIANTS.H3}
      />

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

        {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}

        <Button
          variant={BUTTON_VARIANTS.PRIMARY}
          isLoading={isLoading}
          type="submit"
        >
          Login
        </Button>
      </form>

      <div className="mt-4 text-center">
        <Typography
          text=" Do not have an account?"
          variant={TYPOGRAPHY_VARIANTS.SPAN}
        />

        <Link href="/register" className="text-blue-500 hover:underline ml-1">
          Sign Up
        </Link>
      </div>
    </div>
  );
};
