import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home';
import Dashboard from './Dashboard';
import SignIn from './SignIn';
import SetProfile from './SetProfile';
import Today from '../components/Today';
import Progress from '../components/Progress';
import Leaderboards from '../components/Leaderboards';
import Forums from '../components/Fourms';
import EmailSupport from '../components/EmailSupport';
import LiveChat from '../components/LiveChat';
import Compare from './Compare';
import Modify from './Modify';
import UpdateProfile from './UpdateProfile';
import NavBar from '../components/NavBar';
import ConnectWithUs from '../components/ConnectWithUs';

import UploadImage from '../components/UploadImage';

class App extends Component {
  render() {
    const { state } = this.props;
    return (
      <Router>
        <div>
          <NavBar user={state.auth.user} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/ConnectWithUs" component={ConnectWithUs} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/SetProfile" component={SetProfile} />
            <Route path="/Compare" component={Compare} />
            <Route path="/Modify" component={Modify} />
            <Route path="/Today" component={Today} />
            <Route path="/Progress" component={Progress} />
            <Route path="/Leaderboards" component={Leaderboards} />
            <Route path="/Forums" component={Forums} />
            <Route path="/EmailSupport" component={EmailSupport} />
            <Route path="/LiveChat" component={LiveChat} />
            <Route path="/UpdateProfile" component={UpdateProfile} />

            <Route path="/test" component={UploadImage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(App);
