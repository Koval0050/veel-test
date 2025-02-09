import { create } from "zustand";
import { persist } from "zustand/middleware";


export type UserInfoState = {
  username: string;
  name: string;
};

type AuthState = {
  userInfo: UserInfoState | null;
  logout: VoidFunction;
  setUserInfo: (userInfo: UserInfoState) => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      userInfo: null,
      setUserInfo: (userInfo: UserInfoState) => set({ userInfo }),
      logout: () => set({ userInfo: null }),
    }),
    { name: "auth-storage" }
  )
);
