import React from 'react';
import profilePicture from '../images/anon-user.jpg';

const UserState = props => {
  const style = {
    height: '30vh',
    width: '15vw',
  };

  const renderUserInfo = () => {
    return (
      <div>
        <h3>{props.userInfo.fullName}</h3>
        <h6>Current Weight: {props.userInfo.weight}</h6>
      </div>
    );
  };

  return (
    <div>
      <img src={profilePicture} alt="user-image" style={style} />
      {renderUserInfo()}
    </div>
  );
};

export default UserState;
