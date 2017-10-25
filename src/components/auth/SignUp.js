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
    console.log(this.state);
  };

  handlePassword = event => {
    this.setState({
      password: event.target.value,
    });
    console.log(this.state);
  };

  handleSubmit = event => {
    const { email, password } = this.state;
    event.preventDefault();
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
    return (
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
        <button type="submit">Sign Up</button>
        <NavLink to="/SignIn">
          <span>Sign In</span>
        </NavLink>
      </form>
    );
  }
}
