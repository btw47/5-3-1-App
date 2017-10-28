import actionTypes from '../actionTypes';

export const fetchUserReducer = (state = { addedInfo: false }, action) => {
  switch (action.type) {
    case actionTypes.USER_ADDED_INFO:
      return {
        addedInfo: true,
      };
    case actionTypes.FETCH_USER:
      return {
        ...state,
        uid: action.userID,
        fullName: action.fullName,
        weight: action.weight,
        ormBench: action.ormBench,
        ormDeadlift: action.ormDeadlift,
        ormOverheadPress: action.ormOverheadPress,
        ormSquat: action.ormSquat,
      };
    default:
      return state;
  }
};
