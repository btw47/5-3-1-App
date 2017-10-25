import React from 'react';
import { firebaseApp } from '../../server/firebase';

const SignOut = props => {
  const handleClick = () => {
    console.log('CLICKED');
  };

  return (
    <div>
      <button onClick={() => handleClick()}>Sign out</button>
    </div>
  );
};

export default SignOut;
