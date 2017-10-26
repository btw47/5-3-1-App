import React, { Component } from 'react';
import firebaseui from 'firebaseui';
import { Form } from 'redux-form';
import { NavLink } from 'react-router-dom';
import firebase from 'firebase';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import 'firebaseui/dist/firebaseui.css';

import AuthLinks from '../components/auth/AuthLinks';
import actionTypes from '../actionTypes';
import * as actions from '../actions';
import NavBar from '../components/NavBar';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleUser = event => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePassword = event => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.userLogIn(this.state.email, this.state.password);
  };

  renderError = () => {
    if (this.props.state.auth.error) {
      console.log('SIGN IN ERROR');
      switch (this.props.state.auth.error.code) {
        case 'auth/wrong-password':
          return <div>wrong password idiot</div>;
        case 'auth/invalid-email':
          return <div>enter a valid email, idiot</div>;
      }
    }
  };

  renderSignIn = () => {
    if (window.location.search === '?mode=select') {
      return <div />;
    } else {
      return (
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            placeholder="email"
            onChange={event => this.handleUser(event)}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            onChange={event => this.handlePassword(event)}
          />
          <br />
          <button type="submit">Log In</button>
          <NavLink to="/">
            <span>Sign Up</span>
          </NavLink>
        </form>
      );
    }
  };

  render() {
    const { state } = this.props;
    return (
      <div>
        <NavBar user={state.auth.user} />
        <hr />
        {this.renderSignIn()}
        {this.renderError()}
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
