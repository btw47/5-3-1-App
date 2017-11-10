import actionTypes from '../actionTypes';

export const OneRep = (state = {}, action) =>{
    switch(action.type){
        case actionTypes.ONE_REP:
            return {
                ...state,
                Bench: action.Bench,
                Overhead: action.Overhead,
                Deadlift: action.Deadlift,
                Squat: action.Squat
            };
            default:
                return state;
    }
}