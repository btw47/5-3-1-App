import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import firebase from 'firebase';

import UserStats from '../components/UserStats';
import NavBar from '../components/NavBar';
import * as actions from '../actions';

class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '',
    };
  }

  componentWillMount() {
    const { state } = this.props;

    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        window.location = '/';
      } else if (user) {
        var thisUser = firebase.auth().currentUser;

        this.setState({
          thisUser: thisUser,
        });

        this.props.loggedIn();
        this.props.fetchUser(thisUser);
      }
    });
  }

  handleCompare = event => {
    this.setState({
      time: event.target.value,
    });

    this.props.fetchOldStats(this.state.thisUser, this.state.time);
  };

  renderCompare = () => {
    return (
      <select
        style={{ float: 'right' }}
        onChange={event => this.handleCompare(event)}>
        <option value="">Select a Time</option>
        <option value="lastWeek">Last Week</option>
        <option value="lastMonth">Last Month</option>
        <option value="lastYear">Last Year</option>
      </select>
    );
  };

  render() {
    const { state } = this.props;
    console.log(this.state);

    return (
      <div className="Compare">
        <NavBar user={state.auth.user} />
        <h1>Compare to your old weaker self</h1>
        <UserStats user={state.user} />
        {this.renderCompare()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Compare);
