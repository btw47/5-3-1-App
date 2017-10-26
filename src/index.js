import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './containers/App';
import Dashboard from './containers/Dashboard';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/rootReducer';
import ConnectWithUs from './components/ConnectWithUs';
import SignIn from './containers/SignIn';
import UpdateProfile from './containers/UpdateProfile';
import UpdateGoals from './containers/UpdateGoals';

const logger = createLogger();
// const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

const store = createStore(rootReducer, {}, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/ConnectWithUs" component={ConnectWithUs} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/UpdateProfile" component={UpdateProfile} />
        <Route path="/UpdateGoals" component={UpdateGoals} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
