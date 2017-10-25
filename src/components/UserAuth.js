import React, { Component } from 'react';
import firebaseui from 'firebaseui';
import { Form } from 'redux-form';
import { NavLink } from 'react-router-dom';
import firebase from 'firebase';
import { firebaseAuth, firebaseDb, firebaseApp } from '../server/firebase';
import 'firebaseui/dist/firebaseui.css';

let authUi = new firebaseui.auth.AuthUI(firebaseAuth);

export default class UserAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    let uiConfig = {
      signInSuccessUrl: '/dashboard',
      signInFlow: 'redirect',
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      ],
    };
    authUi.start('#firebaseui-auth-container', uiConfig);
  }

  componentWillUnmount() {}

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

  handleSubmit = () => {};

  render() {
    return (
      <div id="firebaseui-auth-container">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="email"
            onChange={event => this.handleUser(event)}
          />
          <br />
          <input
            type="text"
            placeholder="password"
            onChange={event => this.handlePassword(event)}
          />
          <br />
          <button type="submit">Log In</button>
          {/* <NavLink to="/SignUp">
            <span>Sign Up</span>
          </NavLink> */}
        </form>
      </div>
    );
  }
}
