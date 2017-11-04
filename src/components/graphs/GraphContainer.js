import React, { Component } from 'react';
import DumbGraph from './DumbAreaGraph';
import { Col, Row, Jumbotron, Tabs, Tab, Nav, NavItem } from 'react-bootstrap';

import firebase from 'firebase';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

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
    const formatter = value => `${value} lbs`;
    return (
      <div>
        <Tabs
          defaultActiveKey={1}
          animation={false}
          id="noanim-tab-example"
          style={{ 'border-bottom': '5px' }}>
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
                  color="#deed42"
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
          <Tab eventKey={2} title="Weight">
            <DumbGraph
              title="Weight"
              data={this.props.state.user.progress}
              dataKey="Weight"
              height={500}
              color="#ed8c42"
            />
          </Tab>
          <Tab eventKey={3} title="Bench (ORM)">
            <DumbGraph
              title="Bench"
              data={this.props.state.user.progress}
              dataKey="Bench (ORM)"
              height={500}
              color="#deed42"
            />
          </Tab>
          <Tab eventKey={4} title="Overhead Press (ORM)">
            <DumbGraph
              title="Overhead Press"
              data={this.props.state.user.progress}
              dataKey="Overhead Press (ORM)"
              height={500}
              color="#22ad3e"
            />
          </Tab>
          <Tab eventKey={5} title="Squat (ORM)">
            <DumbGraph
              title="Squats"
              data={this.props.state.user.progress}
              dataKey="Squat (ORM)"
              height={500}
              color="#11c1a7"
            />
          </Tab>
          <Tab eventKey={6} title="Deadlift (ORM)">
            <DumbGraph
              title="Deadlift"
              data={this.props.state.user.progress}
              dataKey="Deadlift (ORM)"
              height={500}
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProgressGraph);
