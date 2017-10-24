import actionTypes from '../actionTypes';

const initialState = {
  user: {
    userStatus: actionTypes.ANONYMOUS,
    username: null,
    uid: null,
  },
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ATTEMPTING_LOGIN:
      return {
        userStatus: actionTypes.AWAITING_AUTH_RESPONSE,
        username: 'guest',
        uid: null,
      };
    case actionTypes.LOGOUT:
      return {
        userStatus: actionTypes.ANONYMOUS,
        username: 'guest',
        uid: null,
      };
    case actionTypes.LOGIN_USER:
      return {
        userStatus: actionTypes.LOGGED_IN,
        username: action.username,
        uid: action.uid,
      };
    default:
      return state || initialState.auth;
  }
};
