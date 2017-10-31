import React, { Component } from 'react';
import firebase from 'firebase';
import { NavLink } from 'react-router-dom';

export default class ForgotPassword extends Component {
  state = {
    reset: false,
  };

  handleEmail = event => {
    this.setState({
      email: event.target.value,
    });
  };

  isReset = () => {
    this.setState({
      reset: true,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const emailAddress = this.state.email;

    firebase
      .auth()
      .sendPasswordResetEmail(emailAddress)
      .then(() => this.isReset())
      .catch(error => {
        alert(error.code);
      });
  };

  renderPage = () => {
    if (this.state.reset) {
      return (
        <div>
          <h3>An email has been sent to {this.state.email}</h3>
          <NavLink to="/SignIn">Sign In</NavLink>
        </div>
      );
    } else {
      return (
        <form onSubmit={event => this.handleSubmit(event)}>
          <h3>Enter your email below to reset your password</h3>
          <label>Enter your email here: </label>
          <input
            onChange={event => this.handleEmail(event)}
            placeholder="email"
          />
          <br />
          <button type="submit">Send reset email!</button>
        </form>
      );
    }
  };

  render() {
    console.log(this.state);
    return <div>{this.renderPage()}</div>;
  }
}
