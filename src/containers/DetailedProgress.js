import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

import ProgressGraph from '../components/ProgressGraph';

class DetailedProgress extends Component {
  render() {
    return (
      <Jumbotron>
        <div>
          <NavLink style={{ float: 'left' }} to="/Compare">
            Compare
          </NavLink>
          <br />
          <ProgressGraph />
        </div>
      </Jumbotron>
    );
  }
}

export default DetailedProgress;
