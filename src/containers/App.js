import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import logo from '../images/weight-lifting-logo.png';
import OurMission from '../components/ourMission';
import Calendar from '../components/calendar';
import './App.css';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ConnectWithUs from '../components/ConnectWithUs';

import UserAuth from '../components/UserAuth';
import * as actions from '../actions';

class App extends Component {
  render() {
    // const { state } = this.props;
    return (
      <div className="App">
        <NavBar />
        <div>
          <img src={logo} className="logo" alt="" />
        </div>
        <UserAuth />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
