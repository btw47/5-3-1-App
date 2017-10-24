import React, { Component } from "react";
import JD from "../images/JD.jpg";
import Ryan from "../images/Ryan.jpg";
import James from "../images/James.jpg";
import Brad from "../images/Brad.jpg";
import fbpic from "../images/fbpic.png";
import github from "../images/git.jpg";
import lkin from "../images/in.png";

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class ConnectWithUs extends Component {
  render() {
    return (
      <Router>
        <div class="container">
          <h1 class="cwtitle">Meet the Team</h1>

          <h2>
            <div class="lineright">
              <ul>
                <li className="aboutus">
                  <div>
                    Bradley Wong
                    <br />
                    <img src={Brad} className="teamPics" />
                    <br />
                    <a href="https://www.facebook.com/bradley.wong.50">
                      <img src={fbpic} className="fb" />
                    </a>
                    <a href="https://github.com/btw47">
                      <img src={github} className="fb" />
                    </a>
                    <a href="notmadeyet">
                      <img src={lkin} className="fb" />
                    </a>
                    <br />
                    <a href="mailto:btw47@nau.edu" target="_top">
                      btw47@nau.edu
                    </a>
                  </div>
                </li>
                <li className="aboutus">
                  <div>
                    JD Headbanger
                    <br />
                    <img src={JD} className="teamPics" />
                    <br />
                    <a href="https://www.facebook.com/headbangerjd">
                      <img src={fbpic} className="fb" />
                    </a>
                    <a href="https://github.com/JdScarberry1000">
                      <img src={github} className="fb" />
                    </a>
                    <a href="notmadeyet">
                      <img src={lkin} className="fb" />
                    </a>
                    <br />
                    <a href="mailto:JdScarberry1000@gmail.com" target="_top">
                      JdScarberry1000@gmail.com
                    </a>
                  </div>
                </li>
                <li className="aboutus">
                  James Bell
                  <br />
                  <img src={James} className="teamPics" />
                  <br />
                  <a href="https://www.facebook.com/JamesMB828">
                    <img src={fbpic} className="fb" />
                  </a>
                  <a href="https://github.com/MrNiceGuy1989">
                    <img src={github} className="fb" />
                  </a>
                  <a href="www.linkedin.com/in/MrNiceGuy">
                    <img src={lkin} className="fb" />
                  </a>
                  <br />
                  <a href="mailto:James.Bell543@gmail.com" target="_top">
                    James.Bell543@gmail.com
                  </a>
                </li>
                <li className="aboutus">
                  Ryan Fuchs
                  <br />
                  <img src={Ryan} className="teamPics" />
                  <br />
                  <a href="https://www.facebook.com/ryan.fuchs.50">
                    <img src={fbpic} className="fb" />
                  </a>
                  <a href="https://github.com/rfox0123">
                    <img src={github} className="fb" />
                  </a>
                  <a href="notmadeyet">
                    <img src={lkin} className="fb" />
                  </a>
                  <br />
                  <a href="mailto:ryan.a.fuchs@gmail.com" target="_top">
                    ryan.a.fuchs@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </h2>
        </div>
      </Router>
    );
  }
}

export default ConnectWithUs;
