import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as AvatarCropper from 'react-avatar-cropper';

import * as actions from '../actions';
import profilePicture from '../images/anon-user.jpg';
import UploadImage from '../components/UploadImage';

const UserStats = props => {
  const { user } = props;

  const style = {
    height: '30vh',
    width: '15vw',
  };

  return (
    <div>
      {/* <img src={profilePicture} alt="user-image" style={style} /> */}
      {/* <AvatarCropper
        onRequestHide={this.handleRequestHide}
        onCrop={this.handleCrop}
        image={profilePicture}
        width={400}
        height={400}
      />{' '} */}
      <UploadImage />
      <div>
        <h3>{user.fullName}</h3>
        <div>
          <h6>Current Weight: {user.weight}</h6>
          <h6>Bench: {user.ormBench}</h6>
          <h6>Overhead Press: {user.ormOverheadPress}</h6>
          <h6>Squats: {user.ormSquat}</h6>
          <h6>Deadlift: {user.ormDeadlift}</h6>
        </div>
      </div>
    </div>
  );
};

export default UserStats;
