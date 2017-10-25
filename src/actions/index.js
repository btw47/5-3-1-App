import actionTypes from '../actionTypes';

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

export const loggedIn = () => {
  console.log('LOGGED IN ACTION');
  return {
    type: actionTypes.LOGGED_IN,
  };
};

export const loggedOut = () => {
  console.log('LOGGED OUT ACTION');
  return {
    type: actionTypes.LOGGED_OUT,
  };
};
