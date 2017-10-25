import React, { Component } from 'react';
import firebaseui from 'firebaseui';
import { Form } from 'redux-form';
import { NavLink } from 'react-router-dom';
import firebase from 'firebase';
import { firebaseAuth, firebaseDb, firebaseApp } from '../server/firebase';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import 'firebaseui/dist/firebaseui.css';

import AuthLinks from '../components/auth/AuthLinks';
import * as actions from '../actions';

class SignIn extends Component {
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

    this.props.loggedIn();
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
    console.log('SIGN IN PROPS', this.props);

    const { authUI } = this.props;
    // console.log(this.props);
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

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
