import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

import ProgressGraph from '../components/graphs/GraphContainer';

class DetailedProgress extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <div>
            <NavLink style={{ float: 'left' }} to="/Compare">
              Compare
            </NavLink>
            <br />
            <ProgressGraph />
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default DetailedProgress;
