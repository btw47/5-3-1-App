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
    <div>
      <button onClick={() => handleClick()}>Sign out</button>
    </div>
  );
};

export default SignOut;
