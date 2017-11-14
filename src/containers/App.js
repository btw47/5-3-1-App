import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Admin from './Admin';

class App extends Component {
  render() {
    const { state } = this.props;
    return (
      <Router>
        <div className="container" className="betheanswer">
          <NavBar user={state.auth.user} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/ConnectWithUs" component={ConnectWithUs} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/ForgotPassword" component={ForgotPassword} />
            <Route path="/SetProfile" component={SetProfile} />
            <Route path="/Today" component={Today} />
            <Route path="/Progress" component={Progress} />
            <Route path="/Leaderboards" component={Leaderboards} />
            <Route path="/Forums" component={Forums} />
            <Route path="/EmailSupport" component={EmailSupport} />
            <Route path="/LiveChat" component={LiveChat} />
            <Route path="/GoalsUpdate" component={GoalsUpdate} />
            <Route path="/WeeklyTemplate" component={WeeklyTemplate} />
            <Route path="/DetailedProgress" component={DetailedProgress} />
            <Route path="/QandA" component={QandA} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(App);
