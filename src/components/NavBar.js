import React, { Component } from "react";
import {
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
            <span className="glyphicon glyphicon-log-in" /> Login
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
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="/Dashboard" />
            <img
              src={logo}
              className="logo2"
              alt=""
            />
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="nav1buttons">
                <NavLink to="/" className="nav1buttons">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/QandA">
                  Q & A
                </NavLink>
              </li>
              <li>
                <NavLink to="/Dashboard">
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/ConnectWithUs">
                  Connect With Us!
                </NavLink>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                {this.renderUserStatus()}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavBar;
