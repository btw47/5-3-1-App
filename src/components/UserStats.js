import React from 'react';
import profilePicture from '../images/anon-user.jpg';

const UserState = props => {
  const style = {
    height: '30vh',
    width: '15vw',
  };

  return (
    <div>
      <img src={profilePicture} alt="user-image" style={style} />
      <p>{props.userInfo.uid}</p>
    </div>
  );
};

export default UserState;
