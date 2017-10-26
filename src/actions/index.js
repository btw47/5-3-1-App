import actionTypes from '../actionTypes';
import { firebaseApp } from '../server/firebase';
import { store } from '../index.js';

//ACTION CREATORS-------------------

export const loggedIn = () => {
  console.log('LOGGED IN ACTION');
  return {
    type: actionTypes.LOGGED_IN,
  };
};

const authError = error => {
  console.log('AUTH ERROR ACTIONS');
  return {
    type: actionTypes.AUTH_ERROR,
    payload: error,
  };
};

//------------------------------------

export const userLogIn = (email, password) => {
  return dispatch => {
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      // .then(() => dispatch(loggedIn()))
      // .then(() => redirect())
      .catch(error => {
        dispatch(authError(error));
      });
  };
};

export const createUser = (email, password) => {
  return dispatch => {
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => dispatch(loggedIn()))
      // .then(() => redirect())
      .catch(error => {
        dispatch(authError(error));
      });
  };
};

export const loggedOut = () => {
  return dispatch => {
    console.log('LOGGED OUT ACTION');
    return {
      type: actionTypes.LOGGED_OUT,
    };
  };
};
