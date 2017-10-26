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
      .then(function() {
        window.location = '/dashboard';
      })
      .catch(error => {
        this.setState({ error });
        console.log(error);
      });
    this.props.loggedIn();
  };

  renderError = () => {
    if (this.state.error) {
      switch (this.state.error.code) {
        case 'auth/invalid-email':
          return <div>enter a valid email, idiot</div>;
        case 'auth/email-already-in-use':
          return <div>email already being used</div>;
      }
    }
  };

  render() {
    const { loggedIn } = this.props;

    // console.log('SIGN UP PROPS', this.props);
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
        <button type="submit">Sign Up</button>
        {this.renderError()}
      </form>
    );
  }
}
