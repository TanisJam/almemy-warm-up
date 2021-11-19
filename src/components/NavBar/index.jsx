import React from "react";
import { NavLink as Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { logOut, selectToken } from "./../../features/login/userSlice";

export default function NavBar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectToken);
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logOut());
    history.go("/login");
  };

  return (
    <nav className="navbar  navbar-dark bg-primary">
      <div className="container">
        <ul className="navbar-nav mx-auto d-flex flex-row gap-5">
          <li className="nav-item">
            <Link activeClassName="active" className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link activeClassName="active" className="nav-link" to="/edit">
              Edit
            </Link>
          </li>
          {isLoggedIn && (
            <li className="nav-item">
              <button className="text-dark btn btn-warning" onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
