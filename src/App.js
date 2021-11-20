import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Login from "./features/Login";
import PrivateRoutes from "./components/PrivateRoutes";
import Home from "./components/Home";
import Edit from "./components/Edit";
import Add from "./components/Add";
import Details from "./components/Details";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoutes>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/details/:id" render={() => <Details />} />
          <Route path="/edit/:id" render={() => <Edit />} />
          <Route path="/add" render={() => <Add />} />
        </PrivateRoutes>
      </Switch>
      <Toaster position="top-right" />
    </Router>
  );
}

export default App;
