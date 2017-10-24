import React, { Component } from "react";
import JD from "../images/JD.jpg";
import Ryan from "../images/Ryan.jpg";
import James from "../images/James.jpg";
import Brad from "../images/Brad.jpg";

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class ConnectWithUs extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Meet the Team</h1>
          <h2>
            <li>
              Bradley Wong
              <br />
              <img src={Brad} className="teamPics"/>
              <br />
              <a href="https://www.facebook.com/bradley.wong.50">Facebook</a>
            </li>
            <li>
              JD Headbanger
              <br />
              <img src={JD} className="teamPics"/>
              <br />
              <a href="https://www.facebook.com/headbangerjd">Facebook</a>
            </li>
            <li>
              James Bell
              <br />
              <img src={James} className="teamPics"/>
              <br />
              <a href="https://www.facebook.com/JamesMB828">Facebook</a>
              <br />
              <a href="https://github.com/MrNiceGuy1989">GitHub</a>
            </li>
            <li>
              Ryan Fuchs
              <br />
              <img src={Ryan} className="teamPics"/>
              <br />
              <a href="https://www.facebook.com/ryan.fuchs.50">Facebook</a>
            </li>
          </h2>
        </div>
      </Router>
    );
  }
}

export default ConnectWithUs;
