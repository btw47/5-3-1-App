import React, { Component } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { Col, Row, Jumbotron, Tabs, Tab, Nav, NavItem } from 'react-bootstrap';

import firebase from 'firebase';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

class ProgressGraphDashboard extends Component {
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
    const formatter = value => `${value} lbs`;
    return (
      <div>
        <Tabs
          defaultActiveKey={1}
          animation={false}
          id="noanim-tab-example"
          style={{ 'border-bottom': '5px' }}>
          <Tab eventKey={1} title="Weight">
            <div style={{ 'text-align': 'center' }}>
              <h2>Weight</h2>
              <ResponsiveContainer width={'100%'} height={200}>
                <AreaChart
                  data={this.props.state.user.progress}
                  syncId="anyId"
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={formatter} />
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
              </ResponsiveContainer>
            </div>
          </Tab>
          <Tab eventKey={2} title="Bench (ORM)">
            <div style={{ 'text-align': 'center' }}>
              <h2>Bench</h2>
              <ResponsiveContainer width={'100%'} height={200}>
                <AreaChart
                  width={600}
                  height={200}
                  data={this.props.state.user.progress}
                  syncId="anyId"
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={formatter} />
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
              </ResponsiveContainer>
            </div>
          </Tab>
          <Tab eventKey={3} title="Overhead Press (ORM)">
            <div style={{ 'text-align': 'center' }}>
              <h2>Overhead Press</h2>
              <ResponsiveContainer width={'100%'} height={200}>
                <AreaChart
                  width={600}
                  height={200}
                  data={this.props.state.user.progress}
                  syncId="anyId"
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={formatter} />
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
              </ResponsiveContainer>
            </div>
          </Tab>
          <Tab eventKey={4} title="Squat (ORM)">
            <div style={{ 'text-align': 'center' }}>
              <h2>Squats</h2>
              <ResponsiveContainer width={'100%'} height={200}>
                <AreaChart
                  width={600}
                  height={200}
                  data={this.props.state.user.progress}
                  syncId="anyId"
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={formatter} />
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
              </ResponsiveContainer>
            </div>
          </Tab>
          <Tab eventKey={5} title="Deadlift (ORM)">
            <div style={{ 'text-align': 'center' }}>
              <h2>Deadlift</h2>
              <ResponsiveContainer width={'100%'} height={200}>
                <AreaChart
                  width={600}
                  height={200}
                  data={this.props.state.user.progress}
                  syncId="anyId"
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={formatter} />
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
              </ResponsiveContainer>
            </div>
          </Tab>
        </Tabs>
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

export default connect(mapStateToProps, mapDispatchToProps)(
  ProgressGraphDashboard
);
