import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { database } from '../../server/firebase';
import firebase from 'firebase';

export default class SignUp extends Component {
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

    const { email, password } = this.state;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({ error });
      })
      .then(function() {
        window.location = '/dashboard';
      });
  };

  render() {
    const { loggedIn } = this.props;

    // console.log('SIGN UP PROPS', this.props);
    return (
      <form onSubmit={() => this.handleSubmit()}>
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
        <button type="submit">Sign Up</button>
        <NavLink to="/SignIn">
          <span>Sign In</span>
        </NavLink>
      </form>
    );
  }
}
