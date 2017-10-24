import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'firebaseui/dist/firebaseui.css';

import App from './containers/App';
import Dashboard from './containers/Dashboard';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/rootReducer';
import SignUp from './containers/SignUp';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

const store = createStore(rootReducer, {}, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/SignUp" component={SignUp} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
