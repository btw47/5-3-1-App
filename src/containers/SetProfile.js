import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Popup from 'react-popup';
import '../css/setProfile.css';
import Calculator from '../components/repMaxCalculator';

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
        this.props.loggedIn();
      }
    });
  };
  weeklyTemplate = (inputValue) => {
    let max = inputValue;
    const oneRepMax = Math.ceil(max);
    const t = ({ percent, reps }) =>
      `${Math.round(percent * oneRepMax)} x ${reps}`;
    //const t = ({ percent, reps }) => `${Math.round(percent * oneRepMax)}${unit} x ${reps}`;

    this.setState({
      calculated: true
    });

    const calculatedTemplate = [
      // week 1
      [
        t({ percent: 0.65, reps: 5 }),
        t({ percent: 0.75, reps: 5 }),
        t({ percent: 0.85, reps: "5+" })
      ],
      // week 2
      [
        t({ percent: 0.7, reps: 3 }),
        t({ percent: 0.8, reps: 3 }),
        t({ percent: 0.9, reps: "3+" })
      ],
      // week 3
      [
        t({ percent: 0.75, reps: 5 }),
        t({ percent: 0.85, reps: 3 }),
        t({ percent: 0.95, reps: "1+" })
      ],
      // week 4
      [
        t({ percent: 0.4, reps: 5 }),
        t({ percent: 0.5, reps: 5 }),
        t({ percent: 0.6, reps: "only 5" })
      ]
    ];

    this.setState(calculatedTemplate);
  };

  handleWeight = event => {
    this.setState({
      weight: event.target.value
    });
  };

  handleOneRepMax = event => {
    this.setState({
      oneRepMax: {
        squatORM: this.refs.squat.value,
        deadliftORM: this.refs.deadlift.value,
        benchORM: this.refs.bench.value,
        overheadPressORM: this.refs.overheadPress.value
      }
    });
  };

  calculatorButton = event => {
    Popup.alert(<Calculator />, '1 Rep Max Calculator');
  };

  handleFullName = event => {
    this.setState({
      fullName: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let squatTemplate = this.weeklyTemplate(parseInt(this.refs.squat.value))
    let deadliftTemplate = this.weeklyTemplate(parseInt(this.refs.deadlift.value))
    let benchTemplate = this.weeklyTemplate(parseInt(this.refs.bench.value))
    let overheadPressTemplate = this.weeklyTemplate(parseInt(this.refs.overheadPress.value))
    if (!this.props.state.OneRep) {
      Popup.alert('Fill out all your stats bro', 'All stats not filled out');
    } else {
      const thisUser = firebase.auth().currentUser;
      if (thisUser != null) {
        var uid = thisUser.uid;
      }

      this.props.setTemplate(squatTemplate, deadliftTemplate, benchTemplate, overheadPressTemplate);
      console.log("SQUAT TEMPLATE", squatTemplate)

      const date = Date();

      firebaseDb
        .ref('users/' + uid + '/user')
        .push({
          weight: this.state.weight,
          oneRepMax: this.state.oneRepMax,
          fullName: this.state.fullName,
          date: date
        })
        .then(() => {
          this.props.history.push('/GoalsUpdate');
        });
    }
  };

  render() {
    if (this.props.state.OneRep.calculatedMax) {
      if (this.props.state.OneRep.calculatedMax.bench) {
        const calculatedMax = this.props.state.OneRep.calculatedMax;
        this.squat.value = calculatedMax.squat;
        this.deadlift.value = calculatedMax.deadlift;
        this.bench.value = calculatedMax.bench;
        this.overheadPress.value = calculatedMax.overhead;
      }
    }

    return (
      <div className="update-profile">
      <div className="container">
        <h2>Enter your info below</h2>
        <form onSubmit={event => this.handleSubmit(event)}>
          <div className="group">
            <input
              required
              type="text"
              onChange={event => this.handleFullName(event)}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className="textinput">Full Name</label>
          </div>
          <div className="group">
            <input
              required
              type="text"
              onChange={event => this.handleWeight(event)}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className="textinput">Current Weight (lbs)</label>
          </div>
          <br />
          <button
            type="button"
            className="btn btn-primary"
            onClick={event => this.calculatorButton(event)}>
            <span className="md-" /> 1 Rep Max Calculator
          </button>
          <div id="one-rep-max">
          <h4>What are your current one rep maxes?</h4>
          <br/>
          <div className="group">
            <input
              required
              type="text"
              ref="bench"
              onChange={event => this.handleOneRepMax(event)}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className="textinput">Bench Press</label>
          </div>
          <label>Overhead Press: </label>
          <input
            type="text"
            ref='ohp'
            placeholder="Weight (lbs)"
            onChange={event => this.handleOneRepMax(event)}
          />
          <br />

          <label>Deadlift: </label>
          <input
            type="text"
            placeholder="Weight (lbs)"
            ref='deadlift'
            onChange={event => this.handleOneRepMax(event)}
          />
          <br />

          <label>Squats: </label>
          <input
            type="text"
            ref='squat'
            placeholder="Weight (lbs)"
            onChange={event => this.handleOneRepMax(event)}
          />
          <br />
          </div>
          <button type="submit" className="btn btn-primary">
            <span className="md-thumb-up" /> Get Started!
          </button>
        </form>
        </div>
        <Popup
          className="mm-popup"
          btnClass="mm-popup__btn"
          closeBtn={true}
          closeHtml={null}
          defaultOk="Ok"
          defaultCancel="Cancel"
          wildClasses={false}
        />
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


// <div id="one-rep-max">
// <button
//   type="button"
//   className="btn btn-primary"
//   onClick={event => this.calculatorButton(event)}>
//   <span className="md-" /> 1 Rep Max Calculator
// </button>
// <h4>What are your current one rep maxes?</h4>

// <label>Bench Press: </label>
// <input
//   type="text"
//   ref={ref => (this.bench = ref)}
//   placeholder="Weight (lbs)"
//   onChange={event => this.handleOneRepMax(event)}
// />
// <br />

// <label>Overhead Press: </label>
// <input
//   type="text"
//   ref={ref => (this.overheadPress = ref)}
//   placeholder="Weight (lbs)"
//   onChange={event => this.handleOneRepMax(event)}
// />
// <br />

// <label>Deadlift: </label>
// <input
//   type="text"
//   placeholder="Weight (lbs)"
//   ref={ref => (this.deadlift = ref)}
//   onChange={event => this.handleOneRepMax(event)}
// />
// <br />

// <label>Squats: </label>
// <input
//   type="text"
//   ref={ref => (this.squat = ref)}
//   placeholder="Weight (lbs)"
//   onChange={event => this.handleOneRepMax(event)}
// />
// <br />
// </div>
