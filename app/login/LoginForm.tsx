"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "@/context/auth";
import { login } from "@/lib/api";
import { serialize } from "cookie";
import { FormInput } from "@/components/FormInput";

const schema = z.object({
  username: z.string(),
  name: z.string(),
  password: z.string().min(6),
});

type LoginFormData = z.infer<typeof schema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(schema),
  });

  const { setUserToken } = useAuthStore();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      // Запит на вход користувача
      const response = await login(data);
      console.log(response);

      // Перевіряємо, чи є токен в відповіді
      if (response.accessToken) {
        // Записуємо токен в cookie
        document.cookie = serialize("token", response.accessToken, {
          httpOnly: true, // Встановлюємо cookie як httpOnly для безпеки
          // secure: process.env.NODE_ENV === "production", // Встановлюємо для продакшн середовища
          maxAge: 60 * 60 * 24 * 7, // Термін дії cookie - 1 тиждень
          path: "/",
        });

        // Зберігаємо токен у Zustand
        setUserToken({ accessToken: response.accessToken });

        // Перехід на головну сторінку
        router.push("/");
      } else {
        setErrorMessage("Invalid username or password");
      }
    } catch (e) {
      console.log(e);
      setErrorMessage("An error occurred during login.");
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
            error={errors.username?.message}
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
          <a href="/register" className="text-blue-500 hover:underline ml-1">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
