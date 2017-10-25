import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FullCalendar from '../components/calendar';
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
        <FullCalendar />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps)(Dashboard);
