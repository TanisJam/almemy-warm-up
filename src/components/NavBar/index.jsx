import React from "react";
import Actions from "./Actions";
import { NavLink as Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { logOut, selectToken } from "./../../features/Login/userSlice";

export default function NavBar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectToken);
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logOut());
    history.go("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <ul className="navbar-nav container-fluid d-flex gap-3 flex-row align-items-center">
          <li className="nav-item">
            <Link
              activeClassName="active"
              className="nav-link fw-bold"
              to="/"
              exact
            >
              Home
            </Link>
          </li>
          {isLoggedIn && <Actions handleLogout={handleLogout} />}
        </ul>
      </div>
    </nav>
  );
}
