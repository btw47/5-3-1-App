import actionTypes from '../actionTypes';

export const fetchUserReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER:
      return {
        ...state,
        uid: action.userID,
        fullName: action.fullName,
        weight: action.weight,
        ormBench: action.ormBench,
        ormDeadlift: action.ormDeadlift,
        ormOverheadPress: action.ormOverheadPress,
        ormSquat: action.ormSquat
      };
    case actionTypes.FETCH_OLD_STATS:
      return {
        ...state,
        oldStats: {
          uid: action.userID,
          fullName: action.fullName,
          weight: action.weight,
          ormBench: action.ormBench,
          ormDeadlift: action.ormDeadlift,
          ormOverheadPress: action.ormOverheadPress,
          ormSquat: action.ormSquat,
          date: action.date
        }
      };
    case actionTypes.PROFILE_IMAGE:
      return {
        ...state,
        profileImage: action.payload
      };
    case actionTypes.NO_PROFILE_IMAGE:
      return {
        ...state,
        profileImage: null
      };
    case actionTypes.FETCH_PROGRESS:
      return {
        ...state,
        progress: action.payload
      };
    default:
      return state;
  }
};
