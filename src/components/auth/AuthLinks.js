import React from 'react';
import firebase from 'firebase';
import { firebaseAuth, firebaseDb, firebaseApp } from '../../server/firebase';

const AuthLinks = props => {
  const { authUI } = props;

  // console.log("AUTHLINKS PROPS", authUI);
  let uiConfig = {
    signInSuccessUrl: '/dashboard',
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      // firebase.auth.GithubAuthProvider.PROVIDER_ID,
      // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
  };
  authUI.start('#firebaseui-auth-container', uiConfig);

  return <div id="firebaseui-auth-container" />;
};

export default AuthLinks;
