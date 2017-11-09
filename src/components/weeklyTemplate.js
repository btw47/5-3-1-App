import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";

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
    weight = parseInt(weight);
    reps = parseInt(reps);
    let max = (weight * reps * 0.0333 + weight) * 0.9;
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
  };

  renderPage = () => {
    if (this.state.calculated) {
      console.log("YOOO", this.state[0]);
      const firstWeek = this.state[0].map(a => {
        return (
          <div>
            <p>{a}</p>
          </div>
        );
      });
      const secondWeek = this.state[1].map(a => {
        return (
          <div>
            <p>{a}</p>
          </div>
        );
      });
      const thirdWeek = this.state[2].map(a => {
        return (
          <div>
            <p>{a}</p>
          </div>
        );
      });
      const fourthWeek = this.state[3].map(a => {
        return (
          <div>
            <p>{a}</p>
          </div>
        );
      });
      console.log(firstWeek);
      return (
        <div>
          <h4>{this.Lift} sets for week 1</h4>
          <h2>{firstWeek}</h2>
          <h4>[Lift] sets for week 2</h4>
          <h2>{secondWeek}</h2>
          <h4>[Lift] sets for week 3</h4>
          <h2>{thirdWeek}</h2>
          <h4>[Lift] sets for week 4</h4>
          <h2>{fourthWeek}</h2>
        </div>
      );
    } else {
      return (
        <div>
          <form onSubmit={event => this.handleSubmit(event)}>
            <h4>Deadlift Numbers</h4>
            <input
              name="liftName"
              onChange={event => this.handleWeightChange(event, "deadlift")}
              type="text"
              placeholder="enter DEADLIFT weight"
            />
            <input
              name="liftName"
              onChange={event => this.handleRepChange(event, "deadlift")}
              type="text"
              placeholder="enter DEADLIFT reps"
            />
            <br />
            <h4>Bench Numbers</h4>
            <input
              name="liftName"
              onChange={event => this.handleWeightChange(event, "deadlift")}
              type="text"
              placeholder="enter BENCH weight"
            />
            <input
              name="liftName"
              onChange={event => this.handleRepChange(event, "deadlift")}
              type="text"
              placeholder="enter BENCH reps"
            />
            <br />
            <h4>Squat Numbers</h4>
            <input
              name="liftName"
              onChange={event => this.handleWeightChange(event, "deadlift")}
              type="text"
              placeholder="enter SQUAT weight"
            />
            <input
              name="liftName"
              onChange={event => this.handleRepChange(event, "deadlift")}
              type="text"
              placeholder="enter SQUAT reps"
            />
            <br />
            <h4>Overhead Press Numbers</h4>
            <input
              name="liftName"
              onChange={event => this.handleWeightChange(event, "deadlift")}
              type="text"
              placeholder="enter OHP weight"
            />
            <input
              name="liftName"
              onChange={event => this.handleRepChange(event, "deadlift")}
              type="text"
              placeholder="enter OHP reps"
            />
            <br />
            <button type="submit">Calculate</button>
          </form>
        </div>
      );
    }
  };

  render() {
    console.log("PROPS", this.props);
    return <div>{this.renderPage()}</div>;
  }
}
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
