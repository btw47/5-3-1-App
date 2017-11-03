import React, { Component } from "react";
import firebase from "firebase";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NavLink } from "react-router-dom";
import "../css/Dashboard.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import WeekCalendar from "../components/calendar";
import UserStats from "../components/UserStats";
import * as actions from "../actions";

class Dashboard extends Component {
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        window.location = "/";
      } else if (user) {
        const thisUser = firebase.auth().currentUser;

        this.props.loggedIn();
        this.props.fetchUser(thisUser);
        this.props.fetchProfileImage(thisUser.uid);
        this.props.fetchCalendar(thisUser)
      }
    });
  }

  render() {
    const { state } = this.props;
    const thisUser = firebase.auth().currentUser;
    
    return (
      <div className="textlayout">
        <UserStats
          className="UserStats"
          user={state.user}
          fetchUser={this.props.fetchUser}
          fetchProfileImage={this.props.fetchProfileImage}
          profileImage={state.user.profileImage}
        />
        <WeekCalendar fetchCalendar={state.calendar} style={{ margin: '50px' }} />
        <NavLink to='/modify'>
          <span>Modify Calendar</span>
        </NavLink>
        <br/>
        <NavLink to="/UpdateProfile">
          <span>Update your stats!</span>
        </NavLink>
        <NavLink to="/Compare" style={{ float: "right" }}>
          <span>Compare</span>
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
