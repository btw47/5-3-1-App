import React, { Component } from 'react';
import UserStats from '../components/UserStats';
import NavBar from '../components/NavBar';

export default class Compare extends Component {
  render() {
    return (
      <div className="Compare">
        <NavBar />
        <UserStats />
      </div>
    );
  }
}
