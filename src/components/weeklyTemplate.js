import React, { Component } from "react";

export default class WeeklyTemplate extends Component {
  constructor() {
    super();
    this.state = {};
  }
  //   oneRepMax = (weight, reps) => {
  //     let max = (weight * reps * 0.0333 + weight) * 0.9;
  //     return Math.ceil(max);
  //   };

  weeklyTemplate = (weight, reps) => {
    let max = (weight * reps * 0.0333 + weight) * 0.9;
    const oneRepMax = Math.ceil(max);
    const t = ({ percent, reps }) =>
      `${Math.round(percent * oneRepMax)} x ${reps}`;
    //const t = ({ percent, reps }) => `${Math.round(percent * oneRepMax)}${unit} x ${reps}`;

    this.setState({
      calculated: true
    });

    this.setState([
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
    ]);
  };
  //week 1 (65% x 5) (75% x 5) (85% x 5+)
  //week 2 (70% x 3) (80% x 3) (90% x 3+)
  //week 3 (75% x 5) (85% x 3) (95% x 1+)
  //week 4 (40% x 5) (50% x 5) (60% x 5)
  handleWeightChange = (event, lift) => {
    lift = lift + "Weight";

    this.setState({
      [lift]: event.target.value
    });
  };

  handleRepChange = (event, lift) => {
    lift = lift + "Reps";

    this.setState({
      [lift]: event.target.value
    });
  };

  handleSubmit = (event, deadliftWeight, deadliftReps) => {
    event.preventDefault();
    const max = this.weeklyTemplate(
      this.state.deadliftWeight,
      this.state.deadliftReps
    );
    console.log("MAX", max);
    // this.setState = {
    //   template: this.weeklyTemplate(max)
    // };
  };

  renderPage = () => {
    if (this.state.calculated) {
      return <div>NewTemplatePage</div>;
    } else {
      return (
        <div>
          <h2>Let's Calculate Your Latest Cycle</h2>
          <form onSubmit={event => this.handleSubmit(event)}>
            <h3>One Rep Max</h3>
            <p>
              The 5/3/1 templates are based off of your 1 REP MAX for each of
              the 4 core lifts; Deadlift, Squat, Bench press, Over-head press.
              The easiest way to calculate your 1 rep max is by doing a core
              lift with any amount of weight that you can safely do, and repping
              that weight as many times as possible. Simply input that weight
              and the number of reps you were able to complete into this form.
              We then use those 2 numbers (weight and reps) to calculate your 1
              rep max, and return your workout template for the month. We do the
              heavy calculations so that you can focus on the heavy lifting.
            </p>
            <h4>Deadlift Numbers</h4>
            <input
              onChange={event => this.handleWeightChange(event, "deadlift")}
              type="text"
              placeholder="enter deadlift weight"
            />
            <input
              onChange={event => this.handleRepChange(event, "deadlift")}
              type="text"
              placeholder="enter deadlift reps"
            />
            <br />
            <button type="submit">Calculate</button>
          </form>
        </div>
      );
    }
  };

  render() {
    console.log(this.state);
    return <div>{this.renderPage()}</div>;
  }
}
