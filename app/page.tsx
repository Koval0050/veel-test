"use client";

import { useEffect } from "react";

import { useAuthStore } from "@/state/auth";
import { fetchUser } from "@/actions/api";

import { UserInfoCard } from "@/components/UserInfoCard";
import { Typography } from "@/components/Typography";
import { TypographyVariants } from "@/components/Typography/constants";

const HomePage = () => {
  const { setUserInfo } = useAuthStore();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

      if (token) {
        const response = await fetchUser(token);
        setUserInfo(response);
      }
    };

    fetchUserInfo();
  }, [setUserInfo]);

  return (
    <div className="page-container">
      <Typography className="mb-6" variant={TypographyVariants.H1}>
        Welcome to the Home Page
      </Typography>

      <UserInfoCard />
    </div>
  );
};
export default HomePage;
