import actionTypes from '../actionTypes';
import { firebaseRef } from '../server/firebase';


const exampleAction = payload => {
  return {
    type: actionTypes.TEST,
    payload
  }
}

//startListeningToAuth is called at the launch of the app => sets up real-time updates from the database
export const startListeningToAuth = () => {
  return function(dispatch, getState) {
    firebaseRef.onAuth(function(authData) {
      if (authData) {
        dispatch({
          type: actionTypes.LOGIN_USER,
          uid: authData.uid,
          username: authData.github.displayName || authData.github.username,
        });
      } else {
        //logout if not already logged out
        if (getState().auth.currently !== actionTypes.ANONYMOUS) {
          dispatch({
            type: actionTypes.LOGOUT,
          });
        }
      }
    });
  };
};

//called after a user submits his credentials => fires ATTEMPING_LOGIN action -> can be used to identify when to use loading spinner
export const attemptLogin = () => {
  return function(dispatch, getState) {
    dispatch({ type: actionTypes.ATTEMPTING_LOGIN });
    firebaseRef.authWithOAuthPopup('github', function(error, authData) {
      if (error) {
        dispatch({
          type: actionTypes.DISPLAY_ERROR,
          error: 'Login failed! ' + error,
        });
        dispatch({
          type: actionTypes.LOGOUT,
        });
      }
    });
  };
};

//called when a user logs out
export const logoutUser = () => {
  return function(dispatch, getState) {
    dispatch({
      type: actionTypes.LOGOUT,
    });
    firebaseRef.unauth();
  };
};

