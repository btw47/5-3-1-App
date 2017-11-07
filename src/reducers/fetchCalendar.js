import actionTypes from '../actionTypes';

export const fetchCalendar = (state = {}, action) =>{
    switch(action.type){
        case actionTypes.FETCH_CALENDAR:
            return {
                ...state,
                    calendar:{
                    selectedDay: action.selectedDay,
                    selectedWeekday: action.selectedWeekday,
                    selectedExercise: action.selectedExercise,
                    date: action.date
                    }
            };
            default:
                return state;
    }
}