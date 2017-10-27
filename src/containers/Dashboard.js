import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Dashboard.css';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import { NavLink } from 'react-router-dom';
import firebase from 'firebase';

import Footer from '../components/Footer';
import Calendar from '../components/calendar';
import NavBar from '../components/NavBar';
import SignOut from '../components/auth/SignOut';
import UserStats from '../components/UserStats';

class Dashboard extends Component {
  componentWillMount() {
    this.props.loggedIn();

    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        window.location = '/';
      } else if (user) {
        const thisUser = firebase.auth().currentUser;

        this.props.fetchUser(thisUser);
      }
    });
  }

  render() {
    console.log('DASHBOARD PROPS', this.props);
    const { state } = this.props;
    return (
      <div className="Dashboard">
        <NavBar user={state.auth.user} />
        <UserStats userInfo={state.user} fetchUser={this.props.fetchUser} />
        <Calendar />
        <NavLink to="/Compare" style={{ float: 'right' }}>
          <span>Compare</span>
        </NavLink>
        <Footer />
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
