import React, { Component } from 'react';
import firebase from 'firebase';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FormGroup, FormControl } from 'react-bootstrap';
import 'firebaseui/dist/firebaseui.css';

import AuthLinks from '../components/auth/AuthLinks';
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

    // console.log("AUTHLINKS PROPS", authUI);
    let uiConfig = {
      signInSuccessUrl: '/dashboard',
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      ]
    };

    if (this.widget) {
      authUI.start('#firebaseui-auth-container', uiConfig);
    }
  }

  // componentDidMount() {
  //   this.email.focus();
  // }

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

  renderError = () => {
    if (this.props.state.auth.error) {
      switch (this.props.state.auth.error.code) {
        case 'auth/wrong-password':
          return <div style={{ color: 'white' }}>wrong password idiot</div>;
        case 'auth/invalid-email':
          return (
            <div style={{ color: 'white' }}>enter a valid email, idiot</div>
          );
        case 'auth/user-not-found':
          return <div style={{ color: 'white' }}>sorry, user not found</div>;
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
            bsSize="md">
            <FormControl
              type="text"
              placeholder="email"
              ref={ref => (this.email = ref)}
              onChange={event => this.handleUser(event)}
            />
            <br />
            <FormControl
              type="password"
              placeholder="password"
              onChange={event => this.handlePassword(event)}
            />
            <br />
            <button type="submit">Log In</button>
            <br />
            <NavLink to="/">
              <span>Sign Up</span>
            </NavLink>
            <br />
            <NavLink to="/ForgotPassword">
              <span>forgot your password?</span>
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
        <hr />
        {this.renderSignIn()}
        {this.renderError()}
        <div id="firebaseui-auth-container" ref={ref => (this.widget = ref)} />
        {/* <AuthLinks authUI={state.auth.authUI} /> */}
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
