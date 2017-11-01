import React, { Component } from "react";
import logo from "../images/weight-lifting-logo.png";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class Footer extends Component {
  style = {
    width: "50px"
  };

  render() {
    return (
      <footer>
        <nav className="navbar2 navbar-inverse navbar-fixed-bottom">
          <div className="navbar2 contnainer-fluid">
            <div className="navbar-header" />
            <ul className="nav navbar-nav">
              <li>
                <a href="/ConnectWithUs">Ladies Come Connect With Us!</a>
              </li>
              <li>
                <a href="/LiveChat">Live Chat!</a>
              </li>
              <li>
                <a href="/EmailSupport">Email Support</a>
              </li>
              <li>
                <a href="/OurMission">Our Mission</a>
              </li>
            </ul>
          </div>
        </nav>
      </footer>
    );
  }
}

export default Footer;
