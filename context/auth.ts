import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UserToken = {
  accessToken: string;
};

export type UserInfo = {
  username: string;
  name: string;
  password: string;
};

type AuthState = {
  userToken: UserToken | null;
  userInfo: UserInfo | null;
  setUserToken: (userToken: UserToken) => void;
  logout: VoidFunction;
  setUserInfo: (userInfo: UserInfo) => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      userToken: null,
      userInfo: null,
      setUserToken: (userToken: UserToken) => set({ userToken }),
      setUserInfo: (userInfo: UserInfo) => set({ userInfo }),
      logout: () => set({ userToken: null, userInfo: null }),
    }),
    { name: "auth-storage" }
  )
);
