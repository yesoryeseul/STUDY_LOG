import useAuthStore from "../store/auth.store";

export const updateAuthData = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { id, value } = e.target;
  const { setAuthData } = useAuthStore.getState();
  setAuthData({ [id]: value });
};
