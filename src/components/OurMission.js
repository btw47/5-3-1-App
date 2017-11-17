import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Fade } from 'react-reveal';

import chart from '../images/comp-app-chart.PNG';
import '../css/App.css';

class OurMission extends Component {
  render() {
    return (
      <div className="logo">
        <div className="content">
          <div
            className="container2"
            style={{ width: '100vw', height: '100vh' }}>
            <div className="lineright">
              <div className="mission">
                <br />
                <br />
                <ul className="mycontenttext">
                  <li className="contentbox">
                    <Fade>
                      <div className="textposition">
                        <h2>Our Mission</h2>
                      </div>
                      <p>
                        We saw there were a lot of differentt apps out there for
                        5/3/1 but most of them are just logs of your workouts
                        instead of a full intergrated app that the user
                        interacts with on a daily basis tracking every step of
                        the way and adding a social aspect to the community so
                        people can talk about their different routines and
                        eating habbits. The 5/3/1 Strength Training Program by
                        Wendler is one of the most proven strength training
                        programs available. My developement team wanted to take
                        the core principles of 5/3/1 and jam them into an
                        intuitive app. We also added some interactive features
                        to keep you motivated, such as personal progress charts
                        and chat forums. This 5/3/1 App does all the heavy
                        thinking for you, so that you can focus on the heavy
                        lifting. Our app will calculate your 1 Rep Max, all we
                        need to know is what days you'd like to workout and
                        we'll develope your workout program for you. It's just
                        that fucking easy. Now get to work and enjoy the 5/3/1
                        gains.
                      </p>
                    </Fade>
                    <br />
                    <br />

                    <Fade delay={200}>
                      <h2>Our Vision</h2>
                      <br />
                      <p>
                        To provide the community with a training template app
                        that follows the 5/3/1 program principles.
                        </p>
                    </Fade>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurMission;
