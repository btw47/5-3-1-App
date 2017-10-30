import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Dashboard.css';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import { NavLink } from 'react-router-dom';

import Footer from '../components/Footer';
import WeekCalendar from '../components/calendar';
import NavBar from '../components/NavBar';
import SignOut from '../components/auth/SignOut';

class Dashboard extends Component {
  componentWillMount() {
    this.props.loggedIn();
  }

  render() {
    console.log('DASHBOARD PROPS', this.props);
    const { state } = this.props;
    return (
      <div className="Dashboard">
        <NavBar user={state.auth.user} />
        <SignOut />
        <WeekCalendar />
        <NavLink to="Modify" style={{float: 'left'}}>
          <span>Modify</span>
        </NavLink>
        <NavLink to="/Compare" style={{ float: 'right' }}>
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
