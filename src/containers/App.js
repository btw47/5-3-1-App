import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home';
import Dashboard from './DashboardContainer';
import SignIn from './SignIn';
import SetProfile from './SetProfile';
import Today from '../components/Today';
import Progress from '../components/Progress';
import Leaderboards from '../components/Leaderboards';
import Forums from '../components/Fourms';
import EmailSupport from '../components/EmailSupport';
import LiveChat from '../components/LiveChat';
import Modify from './Modify';
import NavBar from '../components/NavBar';
import ConnectWithUs from '../components/ConnectWithUs';
import OurMission from '../components/OurMission';
import Footer from '../components/Footer';
import ForgotPassword from '../components/auth/ForgotPassword';
import GoalsUpdate from './GoalsUpdate';
import WeeklyTemplate from '../components/weeklyTemplate';
import DetailedProgress from './DetailedProgress';
import PhotoGallery from './PhotoGallery';
import { Button } from 'reactstrap';

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
            <Route path="/Modify" component={Modify} />
            <Route path="/Today" component={Today} />
            <Route path="/Progress" component={Progress} />
            <Route path="/Leaderboards" component={Leaderboards} />
            <Route path="/Forums" component={Forums} />
            <Route path="/EmailSupport" component={EmailSupport} />
            <Route path="/LiveChat" component={LiveChat} />
            <Route path="/GoalsUpdate" component={GoalsUpdate} />
            <Route path="/WeeklyTemplate" component={WeeklyTemplate} />
            <Route path="/DetailedProgress" component={DetailedProgress} />
            <Route path="/Gallery" component={PhotoGallery} />
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
