import React, { Component } from 'react';
import { Col, Row, Jumbotron, Tabs, Tab, Nav, NavItem } from 'react-bootstrap';
import firebase from 'firebase';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

import DumbGraph from '../components/graphs/DumbAreaGraph';
import ProgressGraphTab from '../components/graphs/ProgressGraphTab';

class ProgressGraph extends Component {
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        window.location = '/';
      } else if (user) {
        const thisUser = firebase.auth().currentUser;

        this.props.fetchProgress(thisUser);
        this.props.fetchOldStats(thisUser);
        this.props.fetchUser(thisUser);
        this.props.loggedIn();
      }
    });
  }

  render() {
    const formatter = value => `${value} lbs`;
    const {
      ormBench,
      ormDeadlift,
      ormOverheadPress,
      ormSquat,
      weight
    } = this.props.state.user;

    const currentStats = {
      ormBench,
      ormDeadlift,
      ormOverheadPress,
      ormSquat,
      weight
    };

    return (
      <div>
        <Jumbotron>
          <NavLink style={{ float: 'left' }} to="/Compare">
            Compare
          </NavLink>
          <br />
          <Tabs
            defaultActiveKey={1}
            animation={false}
            id="noanim-tab-example"
            style={{ borderBottom: '5px' }}>
            <Tab eventKey={1} title="Overview">
              <DumbGraph
                title="Weight"
                data={this.props.state.user.progress}
                dataKey="Weight"
                height={400}
                color="#ed8c42"
              />
              <br />

              <Row>
                <Col md={6} sm={12}>
                  <DumbGraph
                    title="Bench"
                    data={this.props.state.user.progress}
                    dataKey="Bench (ORM)"
                    height={200}
                    color="#cc4b35"
                  />
                </Col>
                <br />

                <Col md={6} sm={12}>
                  <DumbGraph
                    title="Overhead Press"
                    data={this.props.state.user.progress}
                    dataKey="Overhead Press (ORM)"
                    height={200}
                    color="#22ad3e"
                  />
                  <br />
                </Col>
              </Row>

              <Row>
                <Col md={6} sm={12}>
                  <DumbGraph
                    title="Squats"
                    data={this.props.state.user.progress}
                    dataKey="Squat (ORM)"
                    height={200}
                    color="#11c1a7"
                  />
                  <br />
                </Col>

                <Col md={6} sm={12}>
                  <DumbGraph
                    title="Deadlift"
                    data={this.props.state.user.progress}
                    dataKey="Deadlift (ORM)"
                    height={200}
                  />
                  <br />
                </Col>
              </Row>
            </Tab>
            <ProgressGraphTab
              title="Weight"
              data={this.props.state.user.progress}
              dataKey="Weight"
              height={500}
              eventKey={2}
              color="#ed8c42"
              oldStats={this.props.state.user.oldStats}
              currentStats={currentStats}
              stat="weight"
            />
            <ProgressGraphTab
              title="Bench"
              data={this.props.state.user.progress}
              dataKey="Bench (ORM)"
              height={500}
              color="#cc4b35"
              eventKey={3}
              oldStats={this.props.state.user.oldStats}
              currentStats={currentStats}
              stat="ormBench"
            />

            <ProgressGraphTab
              title="Overhead Press"
              data={this.props.state.user.progress}
              dataKey="Overhead Press (ORM)"
              height={500}
              color="#22ad3e"
              eventKey={4}
              oldStats={this.props.state.user.oldStats}
              currentStats={currentStats}
              stat="ormOverheadPress"
            />

            <ProgressGraphTab
              title="Squats"
              data={this.props.state.user.progress}
              dataKey="Squat (ORM)"
              height={500}
              color="#11c1a7"
              eventKey={5}
              oldStats={this.props.state.user.oldStats}
              currentStats={currentStats}
              stat="ormSquat"
            />
            <ProgressGraphTab
              title="Deadlift"
              data={this.props.state.user.progress}
              dataKey="Deadlift (ORM)"
              height={500}
              eventKey={6}
              oldStats={this.props.state.user.oldStats}
              currentStats={currentStats}
              stat="ormDeadlift"
            />
          </Tabs>
        </Jumbotron>
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
