import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "../actions";
import profilePicture from "../images/anon-user.jpg";
import UploadImage from "../components/UploadImage";

const UserStats = props => {
  const { user } = props;

  const style = {
    height: "30vh",
    width: "15vw"
  };

  const imageStyle = {
    width: "12vw"
  };

  const renderImage = () => {
    if (props.profileImage === null) {
      return (
        <div>
          <img src={profilePicture} alt="profile pic" style={imageStyle} />
          <UploadImage
            fetchProfileImage={props.fetchProfileImage}
            userId={user.uid}
          />
        </div>
      );
    } else {
      console.log("IMAGE SOURCE", props.profileImage);
      return (
        <div>
          <img src={props.profileImage} style={imageStyle} />
        </div>
      );
    }
  };

  return (
    <div>
      <div>
        {renderImage()}
        <h3>{user.fullName}</h3>
        <div>
          <h6>Current Weight: {user.weight}</h6>
          <h6>Bench: {user.ormBench}</h6>
          <h6>Overhead Press: {user.ormOverheadPress}</h6>
          <h6>Squats: {user.ormSquat}</h6>
          <h6>Deadlift: {user.ormDeadlift}</h6>
        </div>
        <UploadImage
          fetchProfileImage={props.fetchProfileImage}
          userId={user.uid}
        />
      </div>
    </div>
  );
};

export default UserStats;
