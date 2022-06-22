import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";
import Form from "./Form";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
      .catch(console.error);
  };
  return (
    <Form
      title="Зарегистрироваться"
      spanTitle="Есть аккаунт?"
      linkTitle="войти"
      link="/login"
      handleSubmit={handleRegister}
    />
  );
};

export default SignUp;
