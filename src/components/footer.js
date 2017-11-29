import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import amazonLogo from "../images/amazon-logo.png";
import bodybuildingLogo from "../images/bodybuilding-logo.png";
import myfitpalLogo from "../images/myfitpal-logo.png";

export default class Footer extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-bottom">
        <div className="2container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myfooter"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          <div className="collapse navbar-collapse" id="myfooter">
            <ul className="nav2 navbar-nav">
              <li className="nav1buttons">
                <a href="https://www.amazon.com/Simplest-Effective-Training-System-Strength-ebook/dp/B00AJ8CIQM/ref=sr_1_1?ie=UTF8&qid=1511123020&sr=8-1&keywords=5%2F3%2F1+wendler">
                  5/3/1 Book <img src={amazonLogo} />
                </a>
              </li>
              <li className="nav1buttons">
                <a href="https://www.bodybuilding.com/exercises/finder">
                  Exercise Finder + Demonstration <img src={bodybuildingLogo} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
