"use client";

import { useRouter } from "next/navigation";

import { useAuthStore } from "@/state/auth";

export const UserInfoCard = () => {
  const router = useRouter();
  const { userInfo } = useAuthStore();

  const handleLogout = () => {
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

    router.push("/login");
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        User Information
      </h2>

      {userInfo ? (
        <>
          <p className="text-lg text-gray-800 mb-2">
            <strong>Username:</strong> {userInfo.username}
          </p>

          <p className="text-lg text-gray-800 mb-2">
            <strong>Name:</strong> {userInfo.name}
          </p>
        </>
      ) : (
        <p className="text-xl text-gray-100">Loading user data...</p>
      )}

      <button
        onClick={handleLogout}
        className="w-full py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Logout
      </button>
    </div>
  );
};
