import React, { Component } from 'react';

import logo from '../images/weight-lifting-logo.png';
import actionTypes from '../actionTypes';
import SignOut from './auth/SignOut';

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
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="logo" style={this.style} />
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Today" className="fortheloveofgod">
                Todays Workout
              </a>
            </li>
            <li>
              <a href="/Progress">MY GAINZ</a>
            </li>
            <li>
              <a href="/Leaderboards">Leaderboards</a>
            </li>
            <li>
              <a href="/Forums">Forums</a>
            </li>
            <li>
              <a href="/Dashboard">Dashboard</a>
            </li>
            {this.renderUserStatus()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
