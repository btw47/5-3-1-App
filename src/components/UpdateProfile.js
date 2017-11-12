import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import { FormGroup, FormControl, Button, ButtonToolbar } from 'react-bootstrap';

import * as actions from '../actions';
import { firebaseDb } from '../server/firebase';

class SetProfile extends Component {
  constructor(props) {
    super(props);
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

  componentDidMount() {
    this.weight.focus();
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
      const history = this.props.history;

      firebaseDb
        .ref('users/' + uid + '/user/')
        .push({
          weight: this.state.weight,
          oneRepMax: this.state.oneRepMax,
          date: date
        })
        .then(() => {
          alert('Your stats have been updated. You may now close this window.');
        });
    }
  };

  render() {
    const { state } = this.props;

    return (
      <div className="update-profile">
        <form onSubmit={event => this.handleSubmit(event)}>
          <FormGroup bsSize="small">
          <div className="container">
            <br/>
            <h1 style={{ paddingTop: '80px' }}>Update Stats Below</h1>
            <br />
            <br />
            <div className="group">
              <FormControl
                required
                type="text"
                inputRef={ref => (this.weight = ref)}
                onChange={event => this.handleWeight(event)}
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="textinput">Current Weight: {state.user.weight + ' (lbs)'}</label>
            </div>
            <br />
            <hr />
            <div id="one-rep-max">
              <h4>What are your current one rep maxes?</h4>
              <br />
              <label className="workouts">Bench Press</label>
              <br />
              <br />
              <div className="group">
                <FormControl
                  required
                  type="text"
                  inputRef={ref => (this.bench = ref)}
                  onChange={event => this.handleOneRepMax(event)}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="textinput">{state.user.ormBench + ' (lbs)'}</label>  
              </div>
              <label className="workouts">Overhead Press</label>
              <br />
              <br />
              <div className="group">
                <FormControl
                  required
                  type="text"
                  inputRef={ref => (this.overheadPress = ref)}
                  onChange={event => this.handleOneRepMax(event)}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="textinput">{state.user.ormOverheadPress + ' (lbs)'}</label>  
              </div>
              <label className="workouts">Deadlift</label>
              <br />
              <br />
              <div className="group">
                <FormControl
                  required
                  type="text"
                  inputRef={ref => (this.deadlift = ref)}
                  onChange={event => this.handleOneRepMax(event)}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="textinput">{state.user.ormDeadlift + ' (lbs)'}</label>  
              </div>
              <label className="workouts">Squats</label>
              <br />
              <br />
              <div className="group">
                <FormControl
                  required
                  type="text"
                  inputRef={ref => (this.squat = ref)}
                  onChange={event => this.handleOneRepMax(event)}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="textinput">{state.user.ormSquat + ' (lbs)'}</label>  
              </div>
              <br />
            </div>
            </div>
            <ButtonToolbar>
              <Button
                bsSize="large"
                type="submit"
                bsStyle="primary"
                style={{ display: 'block', margin: 'auto' }}>
                Update
              </Button>
            </ButtonToolbar>
          </FormGroup>
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
