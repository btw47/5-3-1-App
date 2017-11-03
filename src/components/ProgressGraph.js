import React, { Component } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

import firebase from 'firebase';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

class ProgressGraph extends Component {
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        window.location = '/';
      } else if (user) {
        const thisUser = firebase.auth().currentUser;

        this.props.loggedIn();
        this.props.fetchUser(thisUser);
        this.props.fetchProfileImage(thisUser.uid);
        this.props.fetchProgress(thisUser);
      }
    });
  }

  render() {
    return (
      <div>
        <br />
        <h2>Weight</h2>
        <AreaChart
          width={600}
          height={200}
          data={this.props.state.user.progress}
          syncId="anyId"
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Weight"
            stackId="1"
            stroke="#ed8c42"
            fill="#ed8c42"
          />
        </AreaChart>
        <br />

        <h2>Bench</h2>
        <AreaChart
          width={600}
          height={200}
          data={this.props.state.user.progress}
          syncId="anyId"
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Bench (ORM)"
            stackId="1"
            stroke="#deed42"
            fill="#deed42"
          />
        </AreaChart>
        <br />

        <h2>Overhead Press</h2>
        <AreaChart
          width={600}
          height={200}
          data={this.props.state.user.progress}
          syncId="anyId"
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Overhead Press (ORM)"
            stackId="1"
            stroke="#22ad3e"
            fill="#22ad3e"
          />
        </AreaChart>
        <br />

        <h2>Squats</h2>
        <AreaChart
          width={600}
          height={200}
          data={this.props.state.user.progress}
          syncId="anyId"
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Squat (ORM)"
            stackId="1"
            stroke="#11c1a7"
            fill="#11c1a7"
          />
        </AreaChart>
        <br />

        <h2>Deadlift</h2>
        <AreaChart
          width={600}
          height={200}
          data={this.props.state.user.progress}
          syncId="anyId"
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Deadlift (ORM)"
            stackId="1"
            stroke="#2042b2"
            fill="#2042b2"
          />
        </AreaChart>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProgressGraph);
