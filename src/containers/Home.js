import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from '../images/weight-lifting-logo.png';
import OurMission from '../components/ourMission';
import './App.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ConnectWithUs from '../components/ConnectWithUs';
import SignUp from '../components/auth/SignUp';
import * as actions from '../actions';

import Dashboard from './Dashboard';
import registerServiceWorker from '../registerServiceWorker';
import rootReducer from '../reducers/rootReducer';
import SignIn from './SignIn';
import SetProfile from './SetProfile';
import UpdateGoals from './UpdateGoals';
import Today from '../components/Today';
import Progress from '../components/Progress';
import Leaderboards from '../components/Leaderboards';
import Forums from '../components/Fourms';
import ourMission from '../components/ourMission';
import EmailSupport from '../components/EmailSupport';
import LiveChat from '../components/LiveChat';
import Compare from './Compare';
import Modify from './Modify';
import UpdateProfile from './UpdateProfile';

class Home extends Component {
  handleError = () => {
    if (this.props.state.auth.error) {
      return this.props.state.auth.error;
    } else {
      return null;
    }
  };

  render() {
    const { state, loggedIn, createUser } = this.props;
    console.log('APP PROPS', state);
    return (
      <div className="App2">
        <NavBar user={state.auth.user} />
        <div className="App3">
          <img src={logo} className="logo" alt="" />
        </div>
        <SignUp createUser={createUser} error={this.handleError()} />
        <ConnectWithUs />
        <OurMission />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
