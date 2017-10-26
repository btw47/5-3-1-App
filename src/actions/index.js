import actionTypes from '../actionTypes';
import { firebaseApp } from '../server/firebase';

// export function getPosts() {
//   return dispatch => {
//     database.on('value', snapshot => {
//       dispatch({
//         type: actionTypes.FETCH_POSTS,
//         payload: snapshot.val(),
//       });
//     });
//   };
// }

const redirectToDashboard = () => {
  window.location = '/dashboard';
};

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
      .then(() => dispatch(redirectToDashboard()))
      .catch(error => {
        console.log('ACTIONS ERROR', error);
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
