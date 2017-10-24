import React, { Component } from "react";
import JD from "../images/JD.jpg";
import Ryan from "../images/Ryan.jpg";
import James from "../images/James.jpg";
import Brad from "../images/Brad.jpg";
import fbpic from "../images/fbpic.jpg";

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
              <img src={Brad} />
              <br />
              <a href="https://www.facebook.com/bradley.wong.50">
                <img src={fbpic} />
              </a>
              <br />
              <a href="https://github.com/rfox0123">GitHub</a>
              <br />
              <a href="notmadeyet">Linkedin</a>
              <br />
              <a href="mailto:btw47@nau.edu" target="_top">
                btw47@nau.edu
              </a>
            </li>
            <li>
              JD Headbanger
              <br />
              <img src={JD} />
              <br />
              <a href="https://www.facebook.com/headbangerjd">
                <img src={fbpic} />
              </a>
              <br />
              <a href="https://github.com/JdScarberry1000">GitHub</a>
              <br />
              <a href="notmadeyet">Linkedin</a>
              <br />
              <a href="mailto:JdScarberry1000@gmail.com" target="_top">
                JdScarberry1000@gmail.com
              </a>
            </li>
            <li>
              James Bell
              <br />
              <img src={James} />
              <br />
              <a href="https://www.facebook.com/JamesMB828">
                <img src={fbpic} />
              </a>
              <br />
              <a href="https://github.com/MrNiceGuy1989">GitHub</a>
              <br />
              <a href="www.linkedin.com/in/MrNiceGuy">Linkedin</a>
              <br />
              <a href="mailto:James.Bell543@gmail.com" target="_top">
                James.Bell543@gmail.com
              </a>
            </li>
            <li>
              Ryan Fuchs
              <br />
              <img src={Ryan} />
              <br />
              <a href="https://www.facebook.com/ryan.fuchs.50">
                <img src={fbpic} />
              </a>
              <br />
              <a href="https://github.com/rfox0123">GitHub</a>
              <br />
              <a href="notmadeyet">Linkedin</a>
              <br />
              <a href="mailto:ryan.a.fuchs@gmail.com" target="_top">
                ryan.a.fuchs@gmail.com
              </a>
            </li>
          </h2>
        </div>
      </Router>
    );
  }
}

export default ConnectWithUs;
