import actionTypes from '../actionTypes';

const initialUser = {
  uid: null,
  imageURL: null,
  orm: null,
  weight: null,
};

export const fetchUserReducer = (state = initialUser, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER:
      return {
        ...state,
        uid: action.userID,
      };
    default:
      return state;
  }
};
