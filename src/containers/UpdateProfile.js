import React, { Component } from 'react';
import { firebaseDb } from '../server/firebase';

export default class UpdateProfile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleEmail = event => {
    this.setState({
      email: event.target.value,
    });
  };

  handleWeight = event => {
    this.setState({
      weight: event.target.value,
    });
  };

  handleOneRepMax = event => {
    this.setState({
      oneRepMax: {
        squatORM: this.squat.value,
        deadliftORM: this.deadlift.value,
        benchORM: this.bench.value,
        overheadPressORM: this.overheadPress.value,
      },
    });
  };

  handleFullName = event => {
    this.setState({
      fullName: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    // const userId = 'kG9ajUxIzAPZjF80KKZQ0lYne7t1';
    if (!this.state.weight || !this.state.oneRepMax || !this.state.fullName) {
      console.log('NOT FILLED OUT YO');
    } else {
      firebaseDb
        .ref('users/')
        .push({
          weight: this.state.weight,
          oneRepMax: this.state.oneRepMax,
          fullName: this.state.fullName,
        })
        .then(function() {
          window.location = '/UpdateGoals';
        });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div className="update-profile">
        <h2>Enter your info below</h2>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>Full name: </label>
          <input
            type="text"
            placeholder="Name"
            onChange={event => this.handleFullName(event)}
          />
          <br />

          <label>Current Weight: </label>
          <input
            type="text"
            placeholder="Weight (lbs)"
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
              placeholder="Weight (lbs)"
              onChange={event => this.handleOneRepMax(event)}
            />
            <br />

            <label>Overhead Press: </label>
            <input
              type="text"
              ref={ref => (this.overheadPress = ref)}
              placeholder="Weight (lbs)"
              onChange={event => this.handleOneRepMax(event)}
            />
            <br />

            <label>Deadlift: </label>
            <input
              type="text"
              placeholder="Weight (lbs)"
              ref={ref => (this.deadlift = ref)}
              onChange={event => this.handleOneRepMax(event)}
            />
            <br />

            <label>Squats: </label>
            <input
              type="text"
              ref={ref => (this.squat = ref)}
              placeholder="Weight (lbs)"
              onChange={event => this.handleOneRepMax(event)}
            />
            <br />
          </div>
          <button type="submit">Get Started!</button>
        </form>
      </div>
    );
  }
}
