import React, { Component } from 'react';
import MonthCalendar from '../components/monthCalendar';
import { NavLink } from 'react-router-dom';
export default class Modify extends Component {
  render() {
    return (
      <div>
        <MonthCalendar/>
        <NavLink to='/Dashboard'>
          <button>Back</button>
        </NavLink>
      </div>
    )  
    }
}
