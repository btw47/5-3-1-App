import React, { Component } from 'react';
import UpdateProfileModal from '../../containers/UpdateProfileModal';

class UserDescription extends Component {
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Settings</h1>
        <UpdateProfileModal />
      </div>
    );
  }
}

export default UserDescription;
