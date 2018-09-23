import React, { Component } from "react";
import FaComment from "react-icons/lib/md/comment";

class MainNavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top mb-5">
        <div className="container">
          <a className="navbar-brand" href="/">
            <FaComment /> Comments Systems
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSite"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSite">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Comments
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  id="navDrop"
                >
                  Account
                </a>

                <div className="dropdown-menu mb-2">
                  <a href="" className="dropdown-item">
                    Login
                  </a>
                  <a href="" className="dropdown-item">
                    Logout
                  </a>
                  <a href="" className="dropdown-item">
                    Profile
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default MainNavBar;
