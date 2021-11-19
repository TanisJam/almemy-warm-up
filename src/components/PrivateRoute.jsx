import React from "react";
import { Redirect, Route } from "react-router-dom";

export default function PrivateRoute({ children, ...rest }) {
  const isLoggedIn = localStorage.getItem("USER_TOKEN");
  const Content = isLoggedIn ? children : <Redirect to="/login" />;

  return <Route {...rest} render={() => Content} />;
}
