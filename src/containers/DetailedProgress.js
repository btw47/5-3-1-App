import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import ProgressGraph from '../components/ProgressGraph';

class DetailedProgress extends Component {
  render() {
    return (
      <div>
        <NavLink style={{ float: 'left' }} to="/Compare">
          Compare
        </NavLink>
        <br />
        <ProgressGraph />
      </div>
    );
  }
}

export default DetailedProgress;
