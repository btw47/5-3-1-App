import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';
import profilePicture from '../images/anon-user.jpg';
import UploadImage from './UploadImage';

class UserStats extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.renderImage();

    console.log('FUNCTION CALLED');
  }

  renderImage = () => {
    if (this.props.profileImage === null) {
      const { user } = this.props;

      return (
        <div>
          <img src={profilePicture} alt="profile pic" style={this.imageStyle} />
        </div>
      );
    } else {
      return (
        <div>
          <img src={this.props.profileImage} style={this.imageStyle} />
        </div>
      );
    }
  };

  style = {
    height: '30vh',
    width: '15vw'
  };

  imageStyle = {
    width: '12vw'
  };

  render() {
    const { user } = this.props;
    return (
      <div>
        <div>
          {this.renderImage()}
          <h3>{user.fullName}</h3>
          <div>
            <h6>Current Weight: {user.weight}</h6>
            <h6>Bench: {user.ormBench}</h6>
            <h6>Overhead Press: {user.ormOverheadPress}</h6>
            <h6>Squats: {user.ormSquat}</h6>
            <h6>Deadlift: {user.ormDeadlift}</h6>
          </div>
          {/* <UploadImage
            fetchProfileImage={this.props.fetchProfileImage}
            userId={user.uid}
          /> */}
        </div>
      </div>
    );
  }
}

export default UserStats;
