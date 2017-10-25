import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
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
          <NavLink to="/SignIn">
            <span>Sign In</span>
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default NavBar;
