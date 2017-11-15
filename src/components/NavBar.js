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
                <NavLink to="/" className="nav1buttons">
                  <i className="em  em-house" />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/Today">
                  <i className="em em-date" />
                  Today
                </NavLink>
              </li>
              <li>
                <NavLink to="/Leaderboards">
                  <i className="em  em-trophy" />
                  Leaderboards
                </NavLink>
              </li>
              <li>
                <NavLink to="/Progress">
                  <i className="em em-muscle" />
                  MY GAINZ
                </NavLink>
              </li>
              <li>
                <NavLink to="/Forums">
                  <i className="em  em-pencil" />
                  Forums
                </NavLink>
              </li>
              <li>
                <NavLink to="/Dashboard">
                  <i className="em  em-chart_with_upwards_trend" />
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/ConnectWithUs">
                  <i className="em em-sunglasses" />
                  Ladies Come Connect With Us!
                </NavLink>
              </li>
              <li>
                <NavLink to="/LiveChat">
                  <i className="em  em-interrobang" />
                  Live Chat!
                </NavLink>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <NavLink to="/SignIn">
                  <span className="glyphicon glyphicon-log-in" /> Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/SignOut">
                  <span className="glyphicon glyphicon-log-out" /> Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavBar;
