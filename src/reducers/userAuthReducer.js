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
    default:
      return state;
  }
};
