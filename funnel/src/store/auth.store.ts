import { create } from "zustand";

export type AuthData = {
  id: string;
  pw: string;
  email: string;
  phone: string;
};

type AuthStore = {
  authData: AuthData;
  setAuthData: (newData: Partial<AuthData>) => void;
  resetAuth: () => void;
};

const useAuthStore = create<AuthStore>((set) => ({
  authData: {
    id: "",
    pw: "",
    email: "",
    phone: "",
  },

  setAuthData: (newData: Partial<AuthData>) =>
    set((state) => ({
      authData: { ...state.authData, ...newData },
    })),

  // 모든 값을 리셋
  resetAuth: () =>
    set({
      authData: { id: "", pw: "", email: "", phone: "" },
    }),
}));

export default useAuthStore;
