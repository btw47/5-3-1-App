import { combineReducers } from 'redux';
import { loginReducer } from './userAuthReducer';
import { fetchUserReducer } from './fetchUserReducer';
import { fetchCalendar } from './fetchCalendar'

const rootReducer = combineReducers({
  auth: loginReducer,
  user: fetchUserReducer,
  calendar: fetchCalendar
});

export default rootReducer;
