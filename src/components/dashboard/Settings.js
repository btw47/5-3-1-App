import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import firebase from 'firebase';

import UpdateProfileModal from '../../containers/UpdateProfileModal';

import { firebaseDb } from '../../server/firebase';

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
