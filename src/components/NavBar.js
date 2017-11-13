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
      <nav className="navbar navbar-default">
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
            <a className="navbar-brand" href="#" />
            5-3-1 Work Out App
          </div>

          <div className="collapse navbar-collapse" id="myNavBar">
            <ul className="nav navbar-nav">
              <li>
                <NavLink className="navbar-brand" to="/">
                  <i className="em  em-house" />
                  Home <span class="sr-only">(current)</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="navbar-brand" to="/Today">
                  <i className="em em-date" />
                  Today
                </NavLink>
              </li>
              <li>
                <NavLink className="navbar-brand" to="/Leaderboards">
                  <i className="em  em-trophy" />
                  Leaderboards
                </NavLink>
              </li>
              <li>
                <NavLink className="navbar-brand" to="/Progress">
                  <i className="em em-muscle" />
                  MY GAINZ
                </NavLink>
              </li>
              <li>
                <NavLink className="navbar-brand" to="/Forums">
                  <i className="em  em-pencil" />
                  Forums
                </NavLink>
              </li>
              <li>
                <NavLink className="navbar-brand" to="/Dashboard">
                  <i className="em  em-chart_with_upwards_trend" />
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink className="navbar-brand" to="/ConnectWithUs">
                  <i className="em em-sunglasses" />
                  Ladies Come Connect With Us!
                </NavLink>
              </li>
              <li>
                <NavLink className="navbar-brand" to="/LiveChat">
                  <i className="em  em-interrobang" />
                  Live Chat!
                </NavLink>
              </li>
            </ul>
            <div
              class="collapse navbar-collapse"
              id="#bs-example-navbar-collapse-1"
            />
          </div>
        </div>
      </nav>
    );
  }
}
export default NavBar;
