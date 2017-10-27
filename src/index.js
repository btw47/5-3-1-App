import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./containers/App";
import Dashboard from "./containers/Dashboard";
import registerServiceWorker from "./registerServiceWorker";
import rootReducer from "./reducers/rootReducer";
import ConnectWithUs from "./components/ConnectWithUs";
import SignIn from "./containers/SignIn";
import UpdateProfile from "./containers/UpdateProfile";
import UpdateGoals from "./containers/UpdateGoals";
import Today from "./components/Today";
import Progress from "./components/Progress";
import Leaderboards from "./components/Leaderboards";
import Forums from "./components/Fourms";
import ourMission from "./components/ourMission";
import EmailSupport from "./components/EmailSupport";
import LiveChat from "./components/LiveChat";

const logger = createLogger();

export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(thunk, logger)
);

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
        <Route path="/Compare" component={Compare} />
        <Route path="/Modify" component={Modify} />
        <Route path="/Today" component={Today} />
        <Route path="/Progress" component={Progress} />
        <Route path="/Leaderboards" component={Leaderboards} />
        <Route path="/Forums" component={Forums} />
        <Route path="/ourMission" component={ourMission} />
        <Route path="/EmailSupport" component={EmailSupport} />
        <Route path="/LiveChat" component={LiveChat} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
