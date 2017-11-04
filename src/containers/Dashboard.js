import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import '../css/Dashboard.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import WeekCalendar from '../components/calendar';
import BBB from '../components/WorkoutTemplates/BBB';
import UserStats from '../components/UserStats';
// import ProgressGraphDashboard from '../components/graphs/ProgressGraphDashboard';
import * as actions from '../actions';

class Dashboard extends Component {
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.props.history.push('/');
      } else if (user) {
        const thisUser = firebase.auth().currentUser;

        this.props.fetchCalendar(thisUser);
        this.props.fetchProfileImage(thisUser.uid);
        this.props.fetchUser(thisUser);
        this.props.fetchProgress(thisUser);
        this.props.loggedIn();
      }
    });
  }

  render() {
    const { state } = this.props;
    const thisUser = firebase.auth().currentUser;
    console.log('STORE', this.props.state);

    return (
      <div className="textlayout">
        <NavLink to="/DetailedProgress" style={{ float: 'right' }}>
          <span>Progress</span>
        </NavLink>
        <br />
        <Row>
          <Col md={6}>
            <UserStats
              className="UserStats"
              user={state.user}
              fetchUser={this.props.fetchUser}
              fetchProfileImage={this.props.fetchProfileImage}
              profileImage={state.user.profileImage}
            />
          </Col>
          {/* <Col md={6} mdOffsetRight={1}>
            <ProgressGraphDashboard />
          </Col> */}
        </Row>
        <WeekCalendar style={{ margin: '50px' }} />
        <NavLink to="/modify">
          <span>Modify Calendar</span>
        </NavLink>
        <br />
        <NavLink to="/UpdateProfile">
          <span>Update your stats!</span>
        </NavLink>

        <NavLink to="/Compare" style={{ float: 'right' }}>
          <span>Compare</span>
        </NavLink>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
