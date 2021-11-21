import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../features/Login/userSlice";

export default function PrivateRoutes({ children }) {
  const isLoggedIn = useSelector(selectToken);
  const Content = isLoggedIn ? children : <Redirect to="/login" />;
  return Content;
}
