"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { register as registerUser } from "@/lib/api";
import { FormInput } from "@/components/FormInput";
import {
  RegisterFormData,
  registerValidationSchema,
} from "@/validation/register";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerValidationSchema),
  });

  const [errorMessage, setErrorMessage] = useState<string>("");
  const router = useRouter();

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    setErrorMessage(""); 

    try {
      await registerUser({
        username: data.username,
        name: data.name,
        password: data.password,
      });
      router.push("/login"); 
    } catch {
      setErrorMessage("Registration failed, please try again."); 
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 flex justify-center items-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create an Account
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
            placeholder="Full Name"
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

          {errorMessage && (
            <p className="text-sm text-red-500">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>

        <div className="text-center text-sm text-gray-600 mt-4">
          Already have an account?
          <a href="/login" className="text-blue-500 hover:underline ml-1">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
