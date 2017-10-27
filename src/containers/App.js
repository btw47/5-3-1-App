import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import firebase from 'firebase';

import logo from '../images/weight-lifting-logo.png';
import OurMission from '../components/ourMission';
import './App.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ConnectWithUs from '../components/ConnectWithUs';
import SignUp from '../components/auth/SignUp';
import * as actions from '../actions';

class App extends Component {
  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       window.location = '/dashboard'; //After successful login, user will be redirected to user dashboard
  //     }
  //   });
  // }

  handleError = () => {
    if (this.props.state.auth.error) {
      return this.props.state.auth.error;
    } else {
      return null;
    }
  };

  render() {
    const { state, loggedIn, createUser } = this.props;
    console.log('APP PROPS', this.props);
    return (
      <div className="App">
        <NavBar user={state.auth.user} />
        <div>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
