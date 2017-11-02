import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';

import UserStats from '../components/UserStats';
import * as actions from '../actions';

class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        window.location = '/';
      } else if (user) {
        var thisUser = firebase.auth().currentUser;

        this.setState({
          thisUser: thisUser
        });

        this.props.loggedIn();
        this.props.fetchUser(thisUser);
        this.props.fetchProfileImage(thisUser.uid);
        this.props.fetchProgress(thisUser);
      }
    });
  }

  handleCompare = event => {
    this.setState({
      compare: event.target.value
    });

    this.props.fetchOldStats(this.state.thisUser, event.target.value);
  };

  renderCompare = () => {
    return (
      <select
        style={{ float: 'right' }}
        onChange={event => this.handleCompare(event)}>
        <option value="">Select a Time</option>
        <option value="Day One">Day One</option>
        {/* <option value="Last Month">Last Month</option>
        <option value="Last Year">Last Year</option> */}
      </select>
    );
  };

  render() {
    const { state } = this.props;
    console.log(state);

    return (
      <div className="Compare">
        <NavLink style={{ float: 'left' }} to="/dashboard">
          back
        </NavLink>
        <NavLink style={{ float: 'right' }} to="/DetailedProgress">
          Progress
        </NavLink>
        <br />
        <h1>Compare to your old weaker self</h1>
        <UserStats
          user={state.user}
          fetchUser={this.props.fetchUser}
          fetchProfileImage={this.props.fetchProfileImage}
          profileImage={state.user.profileImage}
        />
        {this.renderCompare()}
        {this.state.compare && (
          <div>
            <h3>{this.state.compare}</h3>
            <UserStats
              user={state.user.oldStats}
              fetchUser={this.props.fetchUser}
              fetchProfileImage={this.props.fetchProfileImage}
              profileImage={state.user.profileImage}
            />
          </div>
        )}
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
