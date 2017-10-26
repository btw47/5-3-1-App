import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Dashboard.css'

import Footer from '../components/Footer';
import Calendar from '../components/calendar';
import NavBar from '../components/NavBar';
import SignOut from '../components/auth/SignOut';
import * as actions from '../actions';

class Dashboard extends Component {
  render() {
    console.log('DASHBOARD PROPS', this.props);
    const { state } = this.props;
    return (
      <div className="Dashboard">
        <NavBar user={state.auth.user} />
        <SignOut />
          <Calendar />
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps)(Dashboard);
