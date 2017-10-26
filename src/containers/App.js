import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import logo from '../images/weight-lifting-logo.png';
import OurMission from '../components/ourMission';

import './App.css';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ConnectWithUs from '../components/ConnectWithUs';

import SignUp from '../components/auth/SignUp';
import * as actions from '../actions';

class App extends Component {
  render() {
    const { state, loggedIn } = this.props;
    console.log('APP PROPS', this.props);
    return (
      <div className="App">
        <NavBar user={state.auth.user} />
        <div>
          <img src={logo} className="logo" alt="" />
        </div>
        <SignUp loggedIn={loggedIn} />
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
