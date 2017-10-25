import actionTypes from '../actionTypes';
import firebaseui from 'firebaseui';
import { firebaseAuth } from '../server/firebase';

let authUi = new firebaseui.auth.AuthUI(firebaseAuth);

const initialState = {
  authUI: authUi,
  user: {
    userStatus: actionTypes.ANONYMOUS,
    username: null,
    uid: null,
  },
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
