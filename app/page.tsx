// app/page.tsx
import { cookies } from "next/headers"; // імпортуємо cookies з next/headers
import { fetchUser } from "@/lib/api";
import { UserInfo } from "@/context/auth";

async function getUserInfoFromToken(token: string) {
  try {
    const response = await fetchUser(token);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return null;
  }
}

// Серверний компонент HomePage
export default async function HomePage() {
  const cookieStore = await cookies(); // використання await для отримання cookies
  const token = cookieStore.get("token")?.value; // отримуємо значення токену

  let userInfo: UserInfo | null = null;

  if (token) {
    // Якщо є токен, запитуємо інформацію про користувача
    userInfo = await getUserInfoFromToken(token);
  }

  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Home Page</h1>

      {userInfo ? (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            User Information
          </h2>
          <p className="text-lg text-gray-800 mb-2">
            <strong>Username:</strong> {userInfo.username}
          </p>
          <p className="text-lg text-gray-800 mb-2">
            <strong>Name:</strong> {userInfo.name}
          </p>
          <p className="text-lg text-gray-800 mb-4">
            <strong>Password:</strong> {userInfo.password}
          </p>
        </div>
      ) : (
        <p className="text-xl text-gray-100">Loading user data...</p>
      )}
    </div>
  );
}
