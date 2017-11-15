import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";

import logo from "../images/better-logo-greybest.png";
import actionTypes from "../actionTypes";
import SignOut from "./auth/SignOut";

class NavBar extends Component {
  renderUserStatus = () => {
    if (this.props.user.userStatus === actionTypes.LOGGED_IN) {
      return <SignOut />;
    } else {
      return (
        <li className="mycontenttext">
          <NavLink to="/SignIn" className="signin">
            Log In
          </NavLink>
        </li>
      );
    }
  };

  style = {
    width: "50px"
  };

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a class="navbar-brand" href="#" />
            <img
              src={logo}
              className="logo2"
              alt="logo"
              style={{ width: "85px" }}
            />
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="nav1buttons">
                <a href="/" className="nav1buttons">
                  <i className="em  em-house" />
                  Home
                </a>
              </li>
              <li>
                <a href="/Today">
                  <i className="em em-date" />
                  Today
                </a>
              </li>
              <li>
                <a href="/Leaderboards">
                  <i className="em  em-trophy" />
                  Leaderboards
                </a>
              </li>
              <li>
                <a href="/Progress">
                  <i className="em em-muscle" />
                  MY GAINZ
                </a>
              </li>
              <li>
                <a href="/Forums">
                  <i className="em  em-pencil" />
                  Forums
                </a>
              </li>
              <li>
                <a href="/Dashboard">
                  <i className="em  em-chart_with_upwards_trend" />
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/ConnectWithUs">
                  <i className="em em-sunglasses" />
                  Ladies Come Connect With Us!
                </a>
              </li>
              <li>
                <a href="/LiveChat">
                  <i className="em  em-interrobang" />
                  Live Chat!
                </a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="/SignIn">
                  <span className="glyphicon glyphicon-log-in" /> Login
                </a>
              </li>
              <li>
                <a href="/SignOut">
                  <span className="glyphicon glyphicon-log-out" /> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavBar;
