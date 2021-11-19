import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import LoginForm from "./features/login/LoginForm";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/login" component={LoginForm} />
        <PrivateRoute path="/">
          <h1>Blog</h1>
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
