import React, { Component } from 'react';

import { BrowserRouter as NavLink } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavLink to="/ConnectWithUs">
            <span>Connect with Us!</span>
          </NavLink>
          <br />
          <NavLink to="/LiveChat">
            <span>Live Chat</span>
          </NavLink>
          <br />
          <NavLink to="/AboutUs">
            <span>About Us</span>
          </NavLink>
          <br />
          <NavLink to="/EmailSupport">
            <span>Email Support</span>
          </NavLink>
          <br />
          <NavLink to="/OurMission">
            <span>Our Mission</span>
          </NavLink>
          <br />
        </nav>
      </div>
    );
  }
}

export default Footer;
