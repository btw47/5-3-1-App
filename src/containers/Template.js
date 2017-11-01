import React, { Component } from "react";
import WeeklyTemplate from "../components/weeklyTemplate";

export default class Template extends Component {
  render() {
    return (
      <div>
        <h2>Let's Calculate Your Latest Cycle</h2>
        <h3>One Rep Max</h3>
        <p>
          The 5/3/1 templates are based off of your 1 REP MAX for each of the 4
          core lifts; Deadlift, Squat, Bench press, Over-head press. The easiest
          way to calculate your 1 rep max is by doing a core lift with any
          amount of weight that you can safely do, and repping that weight as
          many times as possible. Simply input that weight and the number of
          reps you were able to complete into this form. We then use those 2
          numbers (weight and reps) to calculate your 1 rep max, and return your
          workout template for the month. We do the heavy calculations so that
          you can focus on the heavy lifting.
        </p>
        <div>
          <WeeklyTemplate lift="Deadlift" />
          <WeeklyTemplate lift="OverHeadPress" />
          <WeeklyTemplate lift="Bench" />
          <WeeklyTemplate lift="Squat" />
        </div>
      </div>
    );
  }
}
