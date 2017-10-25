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
