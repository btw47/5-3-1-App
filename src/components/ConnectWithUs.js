import React, { Component } from 'react';
import { Fade} from 'react-reveal';

import JD from '../images/JD.jpg';
import Ryan from '../images/Ryan.jpg';
import James from '../images/James.jpg';
import Brad from '../images/Brad.jpg';
import fbpic from '../images/fbpic.png';
import github from '../images/git.jpg';
import lkin from '../images/in.png';
import logo from '../images/weight-lifting-logo.png';
import NavBar2 from '../components/NavBar';
import '../css/App.css';

import { BrowserRouter as Router } from "react-router-dom";

class ConnectWithUs extends Component {
  render() {
    var styles = {};

    return (
      <Router>
      <Fade>
        <div className="content" style={styles}>
          <div className="container">
            <h1 className="cwtitle">The 5-3-1 Pro Team</h1>
            <h2>
              <div className="lineright">
                <ul className="myrow">
                  <li className="aboutus">
                    <div>
                      <h3>
                        <b>Bradley Wong</b>
                      </h3>
                      "Fuck Bitches Get Money"
                      <br />
                      <br />
                      <img src={Brad} alt="Brad Picture" className="teamPics" />
                      <br />
                      <a href="https://www.facebook.com/bradley.wong.50">
                        <img src={fbpic} className="fb" />
                      </a>
                      <a href="https://github.com/btw47">
                        <img src={github} className="fb" />
                      </a>
                      <a href="https://linkedin.com/in/bradleywong21">
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
                      <h3>
                        <b>JD Headbanger</b>
                      </h3>
                      "Fuck Bitches Get Money"
                      <br />
                      <br />
                      <img src={JD} alt="JD Picture" className="teamPics" />
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
                    <h3>
                      <b>James Bell</b>
                    </h3>
                    "Fuck Bitches Get Money"
                    <br />
                    <br />
                    <img src={James} alt="James Picture" className="teamPics" />
                    <br />
                    <a href="https://www.facebook.com/JamesMB828">
                      <img src={fbpic} className="fb" />
                    </a>
                    <a href="https://github.com/MrNiceGuy1989">
                      <img src={github} className="fb" />
                    </a>
                    <a href="https://linkedin.com/in/mrniceguy">
                      <img src={lkin} className="fb" />
                    </a>
                    <br />
                    <a href="mailto:James.Bell543@gmail.com" target="_top">
                      James.Bell543@gmail.com
                    </a>
                  </li>
                  <li className="aboutus">
                    <h3>
                      <b>Ryan Fuchs</b>
                    </h3>
                    "Fuck Bitches Get Money"
                    <br />
                    <br />
                    <img src={Ryan} alt="Ryans Picture" className="teamPics" />
                    <br />
                    <a href="https://www.facebook.com/ryan.fuchs.50">
                      <img src={fbpic} className="fb" />
                    </a>
                    <a href="https://github.com/rfox0123">
                      <img src={github} className="fb" />
                    </a>
                    <a href="https://linkedin.com/in/ryanfuchs">
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
        </div>
        </Fade>
      </Router>
    );
  }
}

export default ConnectWithUs;
