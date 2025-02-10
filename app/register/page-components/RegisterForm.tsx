"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormInput } from "@/components/FormInput";
import { Button } from "@/components/Button";
import { BUTTON_VARIANTS } from "@/components/Button/constants";
import { Typography } from "@/components/Typography";
import { TypographyVariants } from "@/components/Typography/constants";

import { register as registerUser } from "@/actions/api";
import {
  RegisterFormData,
  registerValidationSchema,
} from "@/utils/validation/register";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerValidationSchema),
  });

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    setErrorMessage("");
    setIsLoading(true);

    try {
      await registerUser({
        username: data.username,
        name: data.name,
        password: data.password,
      });
      router.push("/login");
    } catch (error) {
      console.error(error);
      setErrorMessage("Registration failed, please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-115 p-8 bg-white rounded-lg shadow-xl">
      <Typography className="mb-6" variant={TypographyVariants.H3}>
        Create an Account
      </Typography>

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
        <FormInput
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          register={register}
          error={errors.confirmPassword?.message}
        />
        {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
        <Button
          variant={BUTTON_VARIANTS.PRIMARY}
          type="submit"
          isLoading={isLoading}
        >
          Register
        </Button>
      </form>

      <div className="text-center mt-4">
        <Typography variant={TypographyVariants.SPAN}>
          Already have an account?
        </Typography>

        <Link href="/login" className="text-blue-500 hover:underline ml-1">
          Login
        </Link>
      </div>
    </div>
  );
};
