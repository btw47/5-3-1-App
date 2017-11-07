import React, { Component } from 'react';
import firebase from 'firebase';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FormGroup, FormControl, ButtonToolbar, Button } from 'react-bootstrap';
import 'firebaseui/dist/firebaseui.css';

import logo from '../images/weight-lifting-logo.png';
import * as actions from '../actions';

class SignIn extends Component {
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.history.push('/Dashboard');
      }
    });
  }

  componentDidMount() {
    const { authUI } = this.props.state.auth;

    let uiConfig = {
      signInSuccessUrl: '/Dashboard',
      signInFlow: 'popup',
      signInOptions: [
        // firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ]
    };

    if (this.widget) {
      authUI.start('#firebaseui-auth-container', uiConfig);
    }
  }

  handleUser = event => {
    this.setState({
      email: event.target.value
    });
  };

  handlePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.userLogIn(this.state.email, this.state.password);
  };

  validationState = () => {
    if (this.props.state.auth.error) {
      switch (this.props.state.auth.error.code) {
        case 'auth/wrong-password':
          return 'error';
        case 'auth/invalid-email':
          return 'error';

        case 'auth/user-not-found':
          return 'error';
        default:
          return <div />;
      }
    }
  };

  renderError = () => {
    if (this.props.state.auth.error) {
      switch (this.props.state.auth.error.code) {
        case 'auth/wrong-password':
          return (
            <h4 style={{ color: 'white', textAlign: 'center' }}>
              Sorry, wrong email or password
            </h4>
          );
        case 'auth/invalid-email':
          return (
            <h4 style={{ color: 'white', textAlign: 'center' }}>
              Please enter a valid email
            </h4>
          );
        case 'auth/user-not-found':
          return (
            <h4 style={{ color: 'white', textAlign: 'center' }}>
              Sorry, this user was not found.
            </h4>
          );
        default:
          return <div />;
      }
    }
  };

  renderSignIn = () => {
    if (window.location.search === '?mode=select') {
      return <div />;
    } else {
      return (
        <form onSubmit={event => this.handleSubmit(event)}>
          <FormGroup
            style={{ padding: '0 30vw', textAlign: 'center' }}
            bsSize="large"
            validationState={this.validationState()}>
            <FormControl
              type="text"
              placeholder="email"
              ref={ref => (this.email = ref)}
              onChange={event => this.handleUser(event)}
            />
            <FormControl
              type="password"
              placeholder="password"
              onChange={event => this.handlePassword(event)}
            />
            <br />
            {this.renderError()}
            <ButtonToolbar>
              <Button
                bsSize="large"
                type="submit"
                style={{ display: 'block', margin: 'auto' }}>
                Log In
              </Button>
            </ButtonToolbar>
            <br />
            <NavLink to="/">
              <h4 style={{ color: 'white' }}>Sign Up</h4>
            </NavLink>
            <br />
            <NavLink to="/ForgotPassword">
              <h5 style={{ color: 'white' }}>forgot your password?</h5>
            </NavLink>
          </FormGroup>
        </form>
      );
    }
  };

  render() {
    const { state } = this.props;
    return (
      <div>
        <img
          src={logo}
          className="logo"
          alt="logo"
          style={{ display: 'block', margin: 'auto' }}
        />
        {this.renderSignIn()}
        <div id="firebaseui-auth-container" ref={ref => (this.widget = ref)} />
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
