"use client";

import { useAuthStore } from "@/state/auth";
import { fetchUser } from "@/actions/api";
import { useEffect } from "react";
import { UserInfoCard } from "./UserInfoCard";

export default function HomePage() {
  const { setUserInfo } = useAuthStore();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

      if (token) {
        try {
          const response = await fetchUser(token);
          setUserInfo(response);
        } catch (error) {
          console.error("Failed to fetch user:", error);
        }
      }
    };

    fetchUserInfo();
  }, [setUserInfo]);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Home Page</h1>

      <UserInfoCard />
    </div>
  );
}
