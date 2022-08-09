import React from "react";
import {Link ,NavLink  } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          CRUD App
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="contact">
                Contacts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="about">
                About
              </NavLink>
            </li>
          </ul>
        </div>

        <Link to="users/add" className="btn btn-outline-light">Add User</Link>
      </div>
    </nav>
  );
};

export default Navbar;
