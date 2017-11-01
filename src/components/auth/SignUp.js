import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
    this.props.createUser(email, password);
  };

  renderError = () => {
    if (this.props.error) {
      switch (this.props.error.code) {
        case 'auth/invalid-email':
          return <div>enter a real email idiot</div>;
        case 'auth/weak-password':
          return <div>you wanna get hacked? enter a longer password</div>;
        case 'auth/email-already-in-use':
          return <div>sorry this email has already been registered</div>;
        default:
          return <div />;
      }
    }
  };

  render() {
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
        <NavLink to="/SignIn">
          <span>Sign in</span>
        </NavLink>
        {this.renderError()}
      </form>
    );
  }
}
