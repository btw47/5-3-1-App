import React, { Component } from "react";

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <NavLink to="/Home">
              <span>User Home Page</span>
            </NavLink>
            <br />
            <NavLink to="/Today">
              <span>Today's Workout</span>
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
          </nav>
        </div>
      </Router>
    );
  }
}

export default NavBar;
