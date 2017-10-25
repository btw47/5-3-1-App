import React, { Component } from 'react';
import firebaseui from 'firebaseui';
import { Form } from 'redux-form';
import { NavLink } from 'react-router-dom';
import firebase from 'firebase';
import { firebaseAuth, firebaseDb, firebaseApp } from '../../server/firebase';
import 'firebaseui/dist/firebaseui.css';

import AuthLinks from './AuthLinks';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        window.location = '/dashboard'; //After successful login, user will be redirected to home.html
      }
    });
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
    const { email, password } = this.state;
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.log(error);
        this.setState({ error: error });
      });
  };

  renderError = () => {
    if (this.state.error) {
      switch (this.state.error.code) {
        case 'auth/wrong-password':
          return <div>wrong password idiot</div>;
        case 'auth/invalid-email':
          return <div>enter a valid email, idiot</div>;
      }
    }
  };

  render() {
    console.log('HANDLE SUBMIT STATE', this.state);

    const { authUI } = this.props;
    // console.log(this.props);
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
        {this.renderError()}
        {/* <AuthLinks authUI={authUI} /> */}
      </div>
    );
  }
}
