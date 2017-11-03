import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";

import logo from "../images/weight-lifting-logo.png";
import actionTypes from "../actionTypes";
import SignOut from "./auth/SignOut";

class NavBar extends Component {
  renderUserStatus = () => {
    if (this.props.user.userStatus === actionTypes.LOGGED_IN) {
      return <SignOut />;
    } else {
      return (
        <li>
          <a href="/SignIn">Sign In</a>
        </li>
      );
    }
  };

  style = {
    width: '50px',
  };

  render() {
    return (
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h4 className="text-white">5-3-1 Workout App</h4>
            <span className="text-muted">
              <a className="navbar-brand" href="/">
                Home
              </a>
              <a className="navbar-brand" href="/Today">
                Today
              </a>
              <a className="navbar-brand" href="/Progress">
                MY GAINZ
              </a>
              <a className="navbar-brand" href="/Leaderboards">
                Leaderboards
              </a>
              <a className="navbar-brand" href="/Forums">
                Forums
              </a>
              <a className="navbar-brand" href="/Dashboard">
                Dashboard
              </a>
            </span>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <img src={logo} alt="logo" style={this.style} />
        </nav>
      </div>
    );
  }
}

export default NavBar;
