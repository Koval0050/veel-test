import axios from "axios";

type UserInfo = {
  username: string;
  name: string;
  password: string;
};

const API_URL = `${process.env.API_PORT}/api/v1/auth`;

export const login = async (data: UserInfo) => {
  try {
    const response = await axios.post(`${API_URL}/login`, data);
    return response.data;
  } catch (error: unknown) {
    console.error("Login failed:", error);
    throw new Error("Login request failed");
  }
};

export const register = async (data: UserInfo) => {
  try {
    const response = await axios.post(`${API_URL}/register`, data);
    return response.data;
  } catch (error: unknown) {
    console.error("Registration failed:", error);
    throw new Error("Registration request failed");
  }
};

export const fetchUser = async (accessToken: string) => {
  try {
    const response = await axios.get(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error: unknown) {
    console.error("Fetch user failed:", error);
    throw new Error("Fetch user request failed");
  }
};
