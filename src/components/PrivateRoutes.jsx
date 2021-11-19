import React from "react";
import { Redirect } from "react-router-dom";

export default function PrivateRoutes({ children, ...rest }) {
  const isLoggedIn = localStorage.getItem("USER_TOKEN");
  const Content = isLoggedIn ? children : <Redirect to="/login" />;
  return Content;
}
