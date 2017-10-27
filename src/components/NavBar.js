import React, { Component } from 'react';
import logo from '../images/weight-lifting-logo.png';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import actionTypes from '../actionTypes';
import SignOut from './auth/SignOut';

class NavBar extends Component {
  renderUserStatus = () => {
    if (this.props.user.userStatus === actionTypes.LOGGED_IN) {
      return <SignOut />;
    } else {
      return (
        <li>
          <a href="/SignIn">Sign In</a>
        </li>
      );
    }
  };

  style = {
    width: '50px',
  };

  render() {
    console.log(this.props);
    return (
      <Router>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <img src={logo} alt="logo" style={this.style} />
              </a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="/Home">Home</a>
              </li>
              <li>
                <a href="/Today">Todays Workout</a>
              </li>
              <li>
                <a href="/Calender">My Calender</a>
              </li>
              <li>
                <a href="/Progress">MY GAINZ</a>
              </li>
              <li>
                <a href="/Leaderboards">Leaderboards</a>
              </li>
              <li>
                <a href="/Forums">Lets Chat Forums</a>
              </li>
              {this.renderUserStatus()}
            </ul>
          </div>
        </nav>
      </Router>

      //   <nav class="navbar navbar-default">
      //     <div class="container-fluid">
      //       <div class="navbar-header">
      //         <button
      //           type="button"
      //           class="navbar-toggle collapsed"
      //           data-toggle="collapse"
      //           data-target="#navbar4"
      //         >
      //           <span class="sr-only">Toggle navigation</span>
      //           <span class="icon-bar" />
      //           <span class="icon-bar" />
      //           <span class="icon-bar" />
      //         </button>
      //         <a class="navbar-brand" href="#">
      //           <img style={this.style} src="../images/Brad.jpg" alt="logo" />
      //         </a>
      //       </div>
      //       <div id="navbar4" class="navbar-collapse collapse">
      //         <ul class="nav navbar-nav">
      //           <li class="active">
      //             <a href="#">Home</a>
      //           </li>
      //           <li>
      //             <a href="#">About</a>
      //           </li>
      //           <li>
      //             <a href="#">Contact</a>
      //           </li>
      //           <li class="dropdown">
      //             <a
      //               href="#"
      //               class="dropdown-toggle"
      //               data-toggle="dropdown"
      //               role="button"
      //               aria-expanded="false"
      //             >
      //               Dropdown <span class="caret" />
      //             </a>
      //             <ul class="dropdown-menu" role="menu">
      //               <li>
      //                 <a href="#">Action</a>
      //               </li>
      //               <li>
      //                 <a href="#">Another action</a>
      //               </li>
      //               <li>
      //                 <a href="#">Something else here</a>
      //               </li>
      //               <li class="divider" />
      //               <li class="dropdown-header">Nav header</li>
      //               <li>
      //                 <a href="#">Separated link</a>
      //               </li>
      //               <li>
      //                 <a href="#">One more separated link</a>
      //               </li>
      //             </ul>
      //           </li>
      //         </ul>
      //       </div>
      //     </div>
      //   </nav>
    );
  }
}

export default NavBar;
