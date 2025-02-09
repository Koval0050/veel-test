import axios from "axios";
import { UserInfo } from "@/context/auth";

const API_URL = "http://localhost:5001/api/v1/auth";


type login = { username: string, name: string, password:string}

export const login = async (data: login) => {
  const response = await axios.post(`${API_URL}/login`, data);
  return response.data; 
};

export const register = async (data: UserInfo) =>
  axios.post(`${API_URL}/register`, data);

export const fetchUser = async (accessToken: string) => {
  return axios.get(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
