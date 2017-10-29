import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './containers/App';
import Dashboard from './containers/Dashboard';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/rootReducer';
import ConnectWithUs from './components/ConnectWithUs';
import SignIn from './containers/SignIn';
import SetProfile from './containers/SetProfile';
import UpdateGoals from './containers/UpdateGoals';
import Today from './components/Today';
import Progress from './components/Progress';
import Leaderboards from './components/Leaderboards';
import Forums from './components/Fourms';
import ourMission from './components/ourMission';
import EmailSupport from './components/EmailSupport';
import LiveChat from './components/LiveChat';
import Compare from './containers/Compare';
import Modify from './containers/Modify';
import UpdateProfile from './containers/UpdateProfile';

const logger = createLogger();

export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
