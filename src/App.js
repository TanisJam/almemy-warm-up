import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Login from "./features/Login";
import PrivateRoutes from "./components/PrivateRoutes";
import Home from "./components/Home";
import Edit from "./components/Edit";
import Add from "./components/Add";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoutes>
          <Route exact path="/" render={() => <Home />}/>
          <Route path="/edit" render={() => <Edit />} />
          <Route path="/add" render={() => <Add />} />
        </PrivateRoutes>
      </Switch>
    </Router>
  );
}

export default App;
