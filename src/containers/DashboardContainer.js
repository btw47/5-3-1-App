import React, { Component } from 'react';
import {
  Tab,
  Row,
  Col,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Dashboard from './Dashboard';
import Compare from './Compare';
import DetailedProgress from './DetailedProgress';
import Modify from './Modify';
import Settings from '../components/Settings';
import Calendar from '../components/calendar';
import PhotoGallery from './PhotoGallery';
import { firebaseDb } from '../server/firebase';
import * as actions from '../actions';

class DashboardContainer extends Component {
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.props.history.push('/');
      } else if (user) {
        const thisUser = firebase.auth().currentUser;
        const uid = thisUser.uid;

        firebaseDb.ref('users/' + uid).on('value', snapshot => {
          const firebaseOutput = snapshot.val();

          const uploadList = [];
          for (let prop in firebaseOutput) {
            uploadList.push(prop);
          }

          if (uploadList.length === 0) {
            this.props.history.push('/SetProfile');
          } else {
            this.props.fetchCalendar(thisUser);
            this.props.fetchProfileImage(thisUser.uid);
            this.props.fetchUser(thisUser);
            this.props.fetchOldStats(thisUser);
            this.props.fetchProgress(thisUser);
            this.props.loggedIn();
          }
        });
      }
    });
  }

  render() {
    return (
      <div className="textlayout">
        <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={12}>
              <Nav bsStyle="tabs">
                <NavItem eventKey="first">
                  <h4>Dashboard</h4>
                </NavItem>
                <NavItem eventKey="calendar">
                  <h4>Calendar</h4>
                </NavItem>
                <NavItem eventKey="modifyCalendar">
                  <h4>Modify Calendar</h4>
                </NavItem>
                <NavItem eventKey="compare">
                  <h4>Compare</h4>
                </NavItem>
                <NavItem eventKey="progress">
                  <NavLink to="/DetailedProgress">
                    <h4>Visualize Progress</h4>
                  </NavLink>
                </NavItem>
                <NavItem eventKey="photos">
                  <h4>Photos</h4>
                </NavItem>
                <NavItem eventKey="settings">
                  <h4>Settings</h4>
                </NavItem>
              </Nav>
            </Col>
            <Col sm={12}>
              <Tab.Content animation>
                <Tab.Pane eventKey="first">
                  <Dashboard />
                </Tab.Pane>
                <Tab.Pane eventKey="compare">
                  <Compare />
                </Tab.Pane>
                <Tab.Pane eventKey="calendar">
                  <Calendar view="month" views={{ month: true }} />
                </Tab.Pane>
                <Tab.Pane eventKey="modifyCalendar">
                  <Modify />
                </Tab.Pane>
                <Tab.Pane eventKey="photos">
                  <PhotoGallery />
                </Tab.Pane>
                <Tab.Pane eventKey="settings">
                  <Settings />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
