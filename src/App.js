import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import LoginForm from "./features/login/LoginForm";
import Home from "./components/Home";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/login" component={LoginForm} />
        <PrivateRoutes>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/edit" render={() => <h1>Edit</h1>} />
        </PrivateRoutes>
      </Switch>
    </Router>
  );
}

export default App;
