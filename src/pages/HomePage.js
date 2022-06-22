import React from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/user-auth";
import { removeUser } from "../store/slices/userSlice";
import Player from "../components/Player";

const HomePage = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  return isAuth ? (
      <div className="home">
        <button onClick={() => dispatch(removeUser())}>Выйти из {email}</button>
        <Player />
      </div>
  ) : (
    <div>
      <Navigate to="/login" replace />
    </div>
  );
};

export default HomePage;
