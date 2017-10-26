import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Dashboard.css';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

import Footer from '../components/Footer';
import Calendar from '../components/calendar';
import NavBar from '../components/NavBar';
import SignOut from '../components/auth/SignOut';

class Dashboard extends Component {
  render() {
    console.log('DASHBOARD PROPS', this.props);
    const { state } = this.props;
    return (
      <div className="Dashboard">
        <NavBar user={state.auth.user} />
        <SignOut />
        <Calendar />
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
