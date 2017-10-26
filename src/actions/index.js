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

const loggedIn = () => {
  console.log('LOGGED IN ACTION');
  return {
    type: actionTypes.LOGGED_IN,
  };
};

export const userLogIn = (email, password) => {
  firebaseApp
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(error => {
      console.log(error);
    });

  // loggedIn();
};

export const loggedOut = () => {
  console.log('LOGGED OUT ACTION');
  return {
    type: actionTypes.LOGGED_OUT,
  };
};
