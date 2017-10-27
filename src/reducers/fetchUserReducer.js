import actionTypes from '../actionTypes';

const initialUser = {
  fullName: null,
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
        fullName: action.fullName,
        weight: action.weight,
      };
    default:
      return state;
  }
};
