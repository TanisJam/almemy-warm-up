import React from "react";
import { NavLink as Link } from "react-router-dom";

export default function Actions({ handleLogout }) {
  return (
    <>
      <li className="nav-item dropdown ms-auto position-relative ">
        <button
          className="btn dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Actions
        </button>
        <div className="dropdown-menu text-center position-absolute top-100 start-0 translate-middle-x">
          <Link
            activeClassName="active"
            className="dropdown-item fw-bold px-3"
            to="/add"
          >
            Add post
          </Link>
          <Link
            activeClassName="active"
            className="dropdown-item fw-bold px-3"
            to="/edit"
            exact
          >
            Edit post by ID
          </Link>
          <div className="dropdown-divider"></div>
          <button
            className="text-dark btn btn-sm btn-warning mx-auto"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </li>
      {/*  */}
    </>
  );
}
