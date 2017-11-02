import React, { Component } from "react";
import connect from "react-redux";

export default class GoalsUpdate extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleDayChange = event => {
    this.setState({
      selectedDay: event.target.value
    });
  };

  handleWeekdayChange = event => {
    this.setState({
      selectedWeekday: event.target.value
    });
  };

  handleExerciseChange = event => {
    this.setState({
      selectedExercise: event.target.value
    });
  };

  // handleSubmit = () =>{

  // }

  render() {
    return (
      <div className="textlayout">
        <div className="content">
          <h2>Update goals below fam!</h2>
          <form onSubmit={this.handleSubmit}>
            <h4>What is your overall fitness goal?</h4>
            <label>Hey pussy</label>
            <input
              type="text"
              placeholder="insert your pussy goals here you pussy"
            />
            <br />
            <h4>Split (Lifting Days per Week)</h4>
            <label>2 Days</label>
            <input
              name="days"
              type="radio"
              value="2days"
              checked={this.state.selectedDay === "2days"}
              onChange={this.handleDayChange}
            />
            <br />
            <label>3 Days</label>
            <input
              name="days"
              type="radio"
              value="3days"
              checked={this.state.selectedDay === "3days"}
              onChange={this.handleDayChange}
            />
            <br />
            <label>4 Days</label>
            <input
              name="days"
              type="radio"
              value="4days"
              checked={this.state.selectedDay === "4days"}
              onChange={this.handleDayChange}
            />

            {/* How do we make sure that our component's state changes when user clicks on our radio buttons?
React offers onChange property that we can pass to our <input> components to handle changes. We then create an onChange 
function that updates the state of our buttons */}

            <br />
            <h4>That's great pansyboy! What days will you be exercising on?</h4>
            <label>Days of the week</label>
            <br />
            <label>
              <a>Monday</a>
            </label>
            <input
              name="weekdays"
              type="checkbox"
              value="monday"
              onChange={this.handleWeekdayChange}
            />
            <br />
            <label>Tuesday</label>
            <input
              name="weekdays"
              type="checkbox"
              value="tuesday"
              onChange={this.handleWeekdayChange}
            />
            <br />
            <label>Wednesday</label>
            <input
              name="weekdays"
              type="checkbox"
              value="wednesday"
              onChange={this.handleWeekdayChange}
            />
            <br />
            <label>Thursday</label>
            <input
              name="weekdays"
              type="checkbox"
              value="thursday"
              onChange={this.handleWeekdayChange}
            />
            <br />
            <label>Friday</label>
            <input
              //name="weekdays"
              type="checkbox"
              value="friday"
              onChange={this.handleWeekdayChange}
            />
            <br />
            <label>Saturday</label>
            <input
              //name="weekdays"
              type="checkbox"
              value="saturday"
              onChange={this.handleWeekdayChange}
            />
            <br />
            <label>Sunday</label>
            <input
              //name="weekdays"
              type="checkbox"
              value="sunday"
              onChange={this.handleWeekdayChange}
            />
            <br />
            <h4>Preferred Exercise Template Radio Button</h4>
            <label>Boring But Big</label>
            <input
              name="exercise"
              type="radio"
              value="boringButBig"
              checked={this.state.selectedExercise === "boringButBig"}
              onChange={this.handleExerciseChange}
            />
            <br />
            <label>Triumvirate</label>
            <input
              name="exercise"
              type="radio"
              value="triumvirate"
              checked={this.state.selectedExercise === "triumvirate"}
              onChange={this.handleExerciseChange}
            />
            <br />
            <label>I'm Not Doing Jack Shit</label>
            <input
              name="exercise"
              type="radio"
              value="jackShit"
              checked={this.state.selectedExercise === "jackShit"}
              onChange={this.handleExerciseChange}
            />
            <br />
            <label>Periodization Bible</label>
            <input
              name="exercise"
              type="radio"
              value="perBible"
              checked={this.state.selectedExercise === "perBible"}
              onChange={this.handleExerciseChange}
            />
            <br />
            <label>Bodyweight</label>
            <input
              name="exercise"
              type="radio"
              value="bodyweight"
              checked={this.state.selectedExercise === "bodyweight"}
              onChange={this.handleExerciseChange}
            />
            <br />
            <button type="submit">Submit My Motherfucking Goals</button>
          </form>
        </div>
      </div>
    );
  }
}
