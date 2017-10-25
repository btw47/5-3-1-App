import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import actionTypes from '../actionTypes';
import SignOut from './auth/SignOut';

class NavBar extends Component {
  renderUserStatus = () => {
    const { user } = this.props;

    if (user.userStatus === actionTypes.ANONYMOUS) {
      return (
        <NavLink to="/SignIn">
          <span>Sign In</span>
        </NavLink>
      );
    } else if (user.userStatus === actionTypes.LOGGED_IN) {
      return <SignOut />;
    }
  };

  render() {
    console.log('NAVBAR PROPS', this.props);

    return (
      <div>
        <nav>
          <NavLink to="/Dashboard">
            <span>User Home Page</span>
          </NavLink>
          <br />
          <NavLink to="/Today">
            <span>Todays Workout</span>
          </NavLink>
          <br />
          <NavLink to="/Calender">
            <span>My Calender</span>
          </NavLink>
          <br />
          <NavLink to="/Progress">
            <span>Progress Tracker MY GAINZ</span>
          </NavLink>
          <br />
          <NavLink to="/Leaderboards">
            <span>Leaderboards, Pairing</span>
          </NavLink>
          <br />
          <NavLink to="/Forums">
            <span>Lets Chat Forums</span>
          </NavLink>
          <br />
          {this.renderUserStatus()}
        </nav>
      </div>
    );
  }
}

export default NavBar;
