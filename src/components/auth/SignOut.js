import React from 'react';
import firebase from 'firebase';

const SignOut = props => {
  const handleClick = () => {
    firebase
      .auth()
      .signOut()
      .then(
        function() {
          console.log('Signed Out');
          window.location = '/';
        },
        function(error) {
          console.error('Sign Out Error', error);
        }
      );
  };

  return (
    <li onClick={() => handleClick()}>
      <a href="/">Sign Out</a>
    </li>
  );
};

export default SignOut;
