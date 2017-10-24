import React, { Component } from 'react';
import { Form } from 'redux-form';
import { firebaseApp } from '../server/firebase';
import { NavLink } from 'react-router-dom';

export default class UserAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount() {}

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

  handleSubmit = () => {
    console.log('SUBMITTED');
  };

  render() {
    console.log(this.props);
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
        <button type="submit">Log In</button>
        <NavLink to="/SignUp">
          <span>Sign Up</span>
        </NavLink>
      </form>
    );
  }
}
