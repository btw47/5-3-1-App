import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';

import logo from '../images/weight-lifting-logo.png';
import actionTypes from '../actionTypes';
import SignOut from './auth/SignOut';

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
    width: '50px'
  };

  render() {
    return (
      <div className="pos-f-t navigationB">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h4 className="text-white">5-3-1 Workout App</h4>
            <span className="text-muted">
              <NavLink className="navbar-brand" to="/">
                <i className="em  em-house" />
                Home
              </NavLink>
              <NavLink className="navbar-brand" to="/Today">
                <i className="em em-date" />
                Today
              </NavLink>
              <NavLink className="navbar-brand" to="/Progress">
                <i className="em em-muscle" />
                MY GAINZ
              </NavLink>
              <NavLink className="navbar-brand" to="/Leaderboards">
                <i className="em  em-trophy" />
                Leaderboards
              </NavLink>
              <NavLink className="navbar-brand" to="/Forums">
                <i className="em  em-pencil" />
                Forums
              </NavLink>
              <NavLink className="navbar-brand" to="/Dashboard">
                <i className="em  em-chart_with_upwards_trend" />
                Dashboard
              </NavLink>
              <NavLink className="navbar-brand" to="/ConnectWithUs">
                <i className="em em-sunglasses" />
                Ladies Come Connect With Us!
              </NavLink>
              <NavLink className="navbar-brand" to="/LiveChat">
                <i className="em  em-interrobang" />
                Live Chat!
              </NavLink>
              <NavLink className="navbar-brand" to="/EmailSupport">
                <i className="em  em-e-mail" />
                Email Support
              </NavLink>
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
            aria-label="Toggle navigation">
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
