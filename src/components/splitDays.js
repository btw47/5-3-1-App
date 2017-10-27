import React, { Component } from "react";

export default class DaysSplit extends Component {
  render() {
    return (
      <div>
        <h4>Split (Lifting Days per Week)</h4>
        <label>2 Days</label>
        <input name="days" type="radio" value="2days" />
        <br />
        <label>3 Days</label>
        <input name="days" type="radio" value="3days" />
        <br />
        <label>4 Days</label>
        <input name="days" type="radio" value="4days" />
      </div>
    );
  }
}
