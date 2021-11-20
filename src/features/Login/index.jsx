import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, selectToken } from "./userSlice";
import { Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";

export default function Login() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectToken);

  const handleLogin = (data) => {
    dispatch(logIn(data));
  };

  const component = (() => {
    if (isLoggedIn) return <Redirect to={{ pathname: "/" }} />;
    return <LoginForm onLogin={handleLogin} />;
  })();

  return component;
}
