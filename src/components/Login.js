import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";
import Form from "./Form";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(auth);
        dispatch(
          setUser({
            id: user.uid,
            email: user.email,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch(() => alert("User not found!"));
  };

  return (
    <Form
      title="Войти"
      spanTitle="Или"
      linkTitle="регистрация"
      link="/register"
      handleSubmit={handleLogin}
    />
  );
};

export default Login;
