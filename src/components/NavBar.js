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
        <li className="mycontenttext">
          <a href="/SignIn" className="signin">
            Log In
          </a>
        </li>
      );
    }
  };

  style = {
    width: "50px"
  };

  render() {
    return (
      <div class="pos-f-t" className="navigationB">
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-dark p-4">
            <h4 class="text-white">
              <b>5-3-1 Workout App</b>
            </h4>
            <span class="text-muted">
              <a class="navbar-brand" href="/">
                <i class="em  em-house" />
                Home
              </a>
              <a className="navbar-brand" href="/Today">
                <i className="em em-date" />
                Today
              </a>
              <a className="navbar-brand" href="/Progress">
                <i className="em em-muscle" />
                MY GAINZ
              </a>
              <a className="navbar-brand" href="/Leaderboards">
                <i className="em  em-trophy" />
                Leaderboards
              </a>
              <a className="navbar-brand" href="/Forums">
                <i className="em  em-pencil" />
                Forums
              </a>
              <a className="navbar-brand" href="/Dashboard">
                <i className="em  em-chart_with_upwards_trend" />
                Dashboard
              </a>
              <a className="navbar-brand" href="/ConnectWithUs">
                <i className="em em-sunglasses" />
                Ladies Come Connect With Us!
              </a>
              <a className="navbar-brand" href="/LiveChat">
                <i className="em  em-interrobang" />
                Live Chat!
              </a>
              <a className="navbar-brand" href="/EmailSupport">
                <i className="em  em-e-mail" />
                Email Support
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
          {/* <a class="navbar-brand" href="/SignIn" className="signin">
            Log In
          </a> */}
          {this.renderUserStatus()}

          <img src={logo} alt="logo" style={this.style} />
        </nav>
      </div>
    );
  }
}

export default NavBar;
