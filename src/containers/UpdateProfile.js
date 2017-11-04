import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';

import * as actions from '../actions';
import { firebaseDb } from '../server/firebase';

class SetProfile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.props.history.push('/');
      } else if (user) {
        const thisUser = firebase.auth().currentUser;

        this.props.fetchUser(thisUser);
        this.props.loggedIn();
      }
    });
  }

  handleEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  handleWeight = event => {
    this.setState({
      weight: event.target.value
    });
  };

  handleOneRepMax = event => {
    this.setState({
      oneRepMax: {
        squatORM: this.squat.value,
        deadliftORM: this.deadlift.value,
        benchORM: this.bench.value,
        overheadPressORM: this.overheadPress.value
      }
    });
  };

  // handleFullName = event => {
  //   this.setState({
  //     fullName: event.target.value,
  //   });
  // };

  handleSubmit = event => {
    event.preventDefault();

    if (!this.state.weight || !this.state.oneRepMax) {
      console.log('NOT FILLED OUT YO');
    } else {
      const thisUser = firebase.auth().currentUser;
      if (thisUser != null) {
        var uid = thisUser.uid;
      }

      const date = Date();

      firebaseDb
        .ref('users/' + uid)
        .push({
          fullName: this.props.state.user.fullName,
          weight: this.state.weight,
          oneRepMax: this.state.oneRepMax,
          date: date
        })
        .then(function() {
          window.location = '/dashboard';
        });
    }
  };

  render() {
    const { state } = this.props;
    return (
      <div className="update-profile">
        <NavLink style={{ float: 'left' }} to="/dashboard">
          back
        </NavLink>
        <br />

        <h2>Enter your info below</h2>
        <form onSubmit={event => this.handleSubmit(event)}>
          {/* <label>Full name: </label>
            <input
            type="text"
            placeholder={state.user.fullName}
            onChange={event => this.handleFullName(event)}
            />
          <br /> */}

          <label>Current Weight: </label>
          <input
            type="text"
            placeholder={state.user.weight + ' (lbs)'}
            onChange={event => this.handleWeight(event)}
          />
          <br />
          <hr />

          <div id="one-rep-max">
            <h4>What are your current one rep maxes?</h4>

            <label>Bench Press: </label>
            <input
              type="text"
              ref={ref => (this.bench = ref)}
              placeholder={state.user.ormBench + ' (lbs)'}
              onChange={event => this.handleOneRepMax(event)}
            />
            <br />

            <label>Overhead Press: </label>
            <input
              type="text"
              ref={ref => (this.overheadPress = ref)}
              placeholder={state.user.ormOverheadPress + ' (lbs)'}
              onChange={event => this.handleOneRepMax(event)}
            />
            <br />

            <label>Deadlift: </label>
            <input
              type="text"
              placeholder={state.user.ormDeadlift + ' (lbs)'}
              ref={ref => (this.deadlift = ref)}
              onChange={event => this.handleOneRepMax(event)}
            />
            <br />

            <label>Squats: </label>
            <input
              type="text"
              ref={ref => (this.squat = ref)}
              placeholder={state.user.ormSquat + ' (lbs)'}
              onChange={event => this.handleOneRepMax(event)}
            />
            <br />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SetProfile);
