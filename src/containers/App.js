import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import logo from '../images/weight-lifting-logo.png';
import OurMission from '../components/ourMission';
import Calendar from '../components/calendar';
import './App.css';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import SignUp from '../components/auth/SignUp';
import * as actions from '../actions';

class App extends Component {
  render() {
    const { state, loggedIn } = this.props;
    // console.log('APP PROPS', state.auth.authUI);
    return (
      <div className="App">
        <NavBar />
        <div>
          <img src={logo} className="logo" alt="" />
        </div>
        <SignUp loggedIn={loggedIn} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
