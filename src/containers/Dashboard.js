import React, { Component } from 'react';
import FullCalendar from "../components/calendar";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <FullCalendar />
      </div>
    );
  }
}
