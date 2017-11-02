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
      <div class="pos-f-t">
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-dark p-4">
            <h4 class="text-white">5-3-1 Workout App</h4>
            <span class="text-muted">
              <a class="navbar-brand" href="/">
                Home
              </a>
              <a class="navbar-brand" href="/Today">
                Today
              </a>
              <a class="navbar-brand" href="/Progress">
                MY GAINZ
              </a>
              <a class="navbar-brand" href="/Leaderboards">
                Leaderboards
              </a>
              <a class="navbar-brand" href="/Forums">
                Forums
              </a>
              <a class="navbar-brand" href="/Dashboard">
                Dashboard
              </a>
              {this.renderUserStatus()}
            </span>
          </div>
        </div>
        <nav class="navbar navbar-dark bg-dark">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <img src={logo} alt="logo" style={this.style} />
        </nav>
      </div>
    );
  }
}

export default NavBar;
