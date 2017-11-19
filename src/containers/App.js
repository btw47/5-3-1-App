import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./Home";
import Dashboard from "./DashboardContainer";
import SignIn from "./SignIn";
import SetProfile from "./SetProfile";
import NavBar from "../components/NavBar";
import ConnectWithUs from "../components/ConnectWithUs";
import ForgotPassword from "../components/auth/ForgotPassword";
import GoalsUpdate from "./GoalsUpdate";
import WeeklyTemplate from "../components/weeklyTemplate";
import DetailedProgress from "./DetailedProgress";
import QandA from "../components/QandA";
import Footer from '../components/footer'

import Admin from "./Admin";

class App extends Component {
  render() {
    // const { state } = this.props;
    return (
      <Router>
        <div>
          <NavBar user={this.props.state.auth.user} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/ConnectWithUs" component={ConnectWithUs} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/ForgotPassword" component={ForgotPassword} />
            <Route path="/SetProfile" component={SetProfile} />
            <Route path="/GoalsUpdate" component={GoalsUpdate} />
            <Route path="/WeeklyTemplate" component={WeeklyTemplate} />
            <Route path="/DetailedProgress" component={DetailedProgress} />
            <Route path="/Admin" component={Admin} />
            <Route path="/QandA" component={QandA} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(App);
