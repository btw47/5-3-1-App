import React, { Component } from "react";

export default class WorkoutDays extends Component {
  render() {
    return (
      <div>
        <h4>That's great pansyboy! What days will you be exercising on?</h4>
        <label>Days of the week</label>
        <br />
        <label>Monday</label>
        <input name="weekdays" type="checkbox" value="monday" />
        <br />
        <label>Tuesday</label>
        <input name="weekdays" type="checkbox" value="tuesday" />
        <br />
        <label>Wednesday</label>
        <input name="weekdays" type="checkbox" value="wednesday" />
        <br />
        <label>Thursday</label>
        <input name="weekdays" type="checkbox" value="thursday" />
        <br />
        <label>Friday</label>
        <input name="weekdays" type="checkbox" value="friday" />
        <br />
        <label>Saturday</label>
        <input name="weekdays" type="checkbox" value="saturday" />
        <br />
        <label>Sunday</label>
        <input name="weekdays" type="checkbox" value="sunday" />
        <br />
      </div>
    );
  }
}
