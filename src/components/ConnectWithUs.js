import React, { Component } from "react";
import JD from "../images/JD.jpg";
import Ryan from "../images/Ryan.jpg";
import James from "../images/James.jpg";
import Brad from "../images/Brad.jpg";
import fbpic from "../images/fbpic.png";
import github from "../images/git.jpg";
import lkin from "../images/in.png";
import "../css/App.css";

class ConnectWithUs extends Component {
  render() {
    var styles = {};

    return (
      <div className="container">
        <div className="logo" />
        <div className="content" style={styles}>
          <div className="centerhomepage">
            <h1 className="cwtitle">
              <span>The 5-3-1 Master Team</span>
            </h1>
            <h2>
              <div className="lineright">
                <ul className="centerhomepage">
                  <li className="aboutus">
                    <div>
                      <h3>
                        <b>Bradley Wong</b>
                      </h3>
                      " Not npm, Yarn bro "
                      <br />
                      <br />
                      <img
                        src={Brad}
                        alt="Brad Picture"
                        className="teamPics"
                        alt=""
                      />
                      <br />
                      <a href="https://github.com/btw47">
                        <img src={github} className="fb" alt="" />
                      </a>
                      <a href="https://linkedin.com/in/bradleywong21">
                        <img src={lkin} className="fb" alt="" />
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
                        <b>Jd Richard H. Scarberry</b>
                      </h3>
                      " Is it lunchtime yet? "
                      <br />
                      <br />
                      <img
                        src={JD}
                        alt="JD Picture"
                        className="teamPics"
                        alt=""
                      />
                      <br />
                      <a href="https://github.com/JdScarberry1000">
                        <img src={github} className="fb" alt="" />
                      </a>
                      <a href="https://www.linkedin.com/in/jd-scarberry-a97063151/">
                        <img src={lkin} className="fb" alt="" />
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
                    " Winner Winner Chicken Dinner "
                    <br />
                    <br />
                    <img
                      src={James}
                      alt="James Picture"
                      className="teamPics"
                      alt=""
                    />
                    <br />
                    <a href="https://www.facebook.com/JamesMB828">
                      <img src={fbpic} className="fb" alt="" />
                    </a>
                    <a href="https://github.com/MrNiceGuy1989">
                      <img src={github} className="fb" alt="" />
                    </a>
                    <a href="https://linkedin.com/in/mrniceguy">
                      <img src={lkin} className="fb" alt="" />
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
                    " Look at my buttons "
                    <br />
                    <br />
                    <img
                      src={Ryan}
                      alt="Ryans Picture"
                      className="teamPics"
                      alt=""
                    />
                    <br />
                    <a href="https://www.facebook.com/ryan.fuchs.50">
                      <img src={fbpic} className="fb" alt="" />
                    </a>
                    <a href="https://github.com/rfox0123">
                      <img src={github} className="fb" alt="" />
                    </a>
                    <a href="https://linkedin.com/in/ryanfuchs">
                      <img src={lkin} className="fb" alt="" />
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
      </div>
    );
  }
}

export default ConnectWithUs;
