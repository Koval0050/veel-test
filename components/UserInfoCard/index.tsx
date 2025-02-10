"use client";

import { useRouter } from "next/navigation";

import { useAuthStore } from "@/state/auth";
import { Typography } from "../Typography";
import { TypographyVariants } from "../Typography/constants";
import { Button } from "../Button";
import { BUTTON_VARIANTS } from "../Button/constants";

export const UserInfoCard = () => {
  const router = useRouter();
  const { userInfo } = useAuthStore();

  const handleLogout = () => {
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

    router.push("/login");
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
      <Typography
        className="mb-4"
        text="User Information"
        variant={TypographyVariants.H3}
      />

      {userInfo ? (
        <>
          <Typography
            className="mb-2"
            text={`Username: ${userInfo.username}`}
            variant={TypographyVariants.H6}
          />
          <Typography
            className="mb-2"
            text={`Name: ${userInfo.name}`}
            variant={TypographyVariants.H6}
          />
        </>
      ) : (
        <Typography
          className="mb-6"
          text="Loading user data..."
          variant={TypographyVariants.H6}
        />
      )}

      <Button variant={BUTTON_VARIANTS.SECONDARY} onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};
