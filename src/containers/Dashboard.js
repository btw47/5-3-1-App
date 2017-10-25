import React, { Component } from 'react';

import FullCalendar from '../components/calendar';
import NavBar from '../components/NavBar';
import SignOut from '../components/auth/SignOut';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <NavBar />
        <SignOut />
        <FullCalendar />
      </div>
    );
  }
}
