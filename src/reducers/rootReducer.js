import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { loginReducer } from './userAuthReducer';

const rootReducer = combineReducers({
  auth: loginReducer,
});

export default rootReducer;
