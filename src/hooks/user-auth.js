import { useSelector } from "react-redux";

export const useAuth = () => {
  const { id, email, token } = useSelector((state) => state.user);
  return {
    isAuth: !!email,
    id,
    email,
    token,
  };
};
