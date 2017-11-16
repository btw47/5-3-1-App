import React, { Component } from "react";
import './weeklyTemplate.css';

export default class WeeklyTemplate extends Component {
  constructor() {
    super();
    this.state = {};
  }

  weeklyTemplate = (weights, reps) => {
    let weight = parseInt(weights);
    let rep = parseInt(reps);
    let max = (weight * rep * 0.0333 + weight) * 0.9;
    const oneRepMax = Math.ceil(max);
    const t = ({ percent, reps }) =>
      `${Math.round(percent * oneRepMax)} x ${reps}`;
    //const t = ({ percent, reps }) => `${Math.round(percent * oneRepMax)}${unit} x ${reps}`;
    return [
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
  };
  //week 1 (65% x 5) (75% x 5) (85% x 5+)
  //week 2 (70% x 3) (80% x 3) (90% x 3+)
  //week 3 (75% x 5) (85% x 3) (95% x 1+)
  //week 4 (40% x 5) (50% x 5) (60% x 5)
  // handleWeightChange = (event, lift) => {
  //   lift = lift + "Weight";

  //   this.setState({
  //     [lift]: event.target.value
  //   });
  // };

  // handleRepChange = (event, lift) => {
  //   lift = lift + "Reps";

  //   this.setState({
  //     [lift]: event.target.value
  //   });
  // };

  handleSubmit = (event) => {
    event.preventDefault();
    const deadlift = this.weeklyTemplate(this.refs.DeadliftWeight.value, this.refs.DeadliftReps.value);
    const bench = this.weeklyTemplate(this.refs.BenchWeight.value, this.refs.BenchReps.value);
    const squat = this.weeklyTemplate(this.refs.SquatWeight.value, this.refs.SquatReps.value);
    const ohp = this.weeklyTemplate(this.refs.OverheadWeight.value, this.refs.OverheadReps.value);
    this.setState({
      deadlift: deadlift,
      bench: bench,
      squat: squat,
      ohp: ohp
    })
    console.log(this.state)
  };

  render() {
    return (
      <div className="WeeklyTemplate">
        <form >
          <h4>Deadlift Numbers</h4>
          <input
            name="liftName"
            // onChange={event => this.handleWeightChange(event, "deadlift")}
            type="text"
            ref="DeadliftWeight"
            placeholder="enter DEADLIFT weight"
          />
          <input
            name="liftName"
            // onChange={event => this.handleRepChange(event, "deadlift")}
            type="text"
            ref="DeadliftReps"
            placeholder="enter DEADLIFT reps"
          />
          <br />
          <h4>Bench Numbers</h4>
          <input
            name="liftName"
            // onChange={event => this.handleWeightChange(event, "deadlift")}
            type="text"
            ref="BenchWeight"
            placeholder="enter BENCH weight"
          />
          <input
            name="liftName"
            // onChange={event => this.handleRepChange(event, "deadlift")}
            type="text"
            ref="BenchReps"
            placeholder="enter BENCH reps"
          />
          <br />
          <h4>Squat Numbers</h4>
          <input
            name="liftName"
            // onChange={event => this.handleWeightChange(event, "deadlift")}
            type="text"
            ref="SquatWeight"
            placeholder="enter SQUAT weight"
          />
          <input
            name="liftName"
            // onChange={event => this.handleRepChange(event, "deadlift")}
            type="text"
            ref="SquatReps"
            placeholder="enter SQUAT reps"
          />
          <br />
          <h4>Overhead Press Numbers</h4>
          <input
            name="liftName"
            ref="OverheadWeight"
            // onChange={event => this.handleWeightChange(event, "deadlift")}
            type="text"
            placeholder="enter OHP weight"
          />
          <input
            name="liftName"
            // onChange={event => this.handleRepChange(event, "deadlift")}
            type="text"
            ref="OverheadReps"
            placeholder="enter OHP reps"
          />
          <br />
          <button type="button" onClick={event => this.handleSubmit(event)}>Calculate</button>
        </form>
      </div>
    );
  }
};
// -------------------------------------------

// import React, { Component } from "react";
// import WeeklyTemplate from "../components/weeklyTemplate";

// export default class Template extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Let's Calculate Your Latest Cycle</h2>
//         <h3>One Rep Max</h3>
//         <p>
//           The 5/3/1 templates are based off of your 1 REP MAX for each of the 4
//           core lifts; Deadlift, Squat, Bench press, Over-head press. The easiest
//           way to calculate your 1 rep max is by doing a core lift with any
//           amount of weight that you can safely do, and repping that weight as
//           many times as possible. Simply input that weight and the number of
//           reps you were able to complete into this form. We then use those 2
//           numbers (weight and reps) to calculate your 1 rep max, and return your
//           workout template for the month. We do the heavy calculations so that
//           you can focus on the heavy lifting.
//         </p>
//         <div>
//           <WeeklyTemplate lift="Deadlift" />
//           <WeeklyTemplate lift="OverHeadPress" />
//           <WeeklyTemplate lift="Bench" />
//           <WeeklyTemplate lift="Squat" />
//         </div>
//       </div>
//     );
//   }
// }
