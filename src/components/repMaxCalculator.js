import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

class Calculator extends Component {
    constructor(props){
        super(props)
    }
    state={
        Bench: "",
        Overhead: "",
        Deadlift: "",
        Squat: ""
    }
    renderPage = () => {
      if (this.state.calculated) {
        console.log("YOOO", this.state[0]);
        const firstWeek = this.state[0].map(a => {
        return (
          <div key={1}>
            <p>{a}</p>
          </div>
        );
      });
      const secondWeek = this.state[1].map(a => {
      return (
       <div key={2}>
         <p>{a}</p>
       </div>
      );
    });
    const thirdWeek = this.state[2].map(a => {
    return (
     <div key={3}>
       <p>{a}</p>
     </div>
    );
    });
    const fourthWeek = this.state[3].map(a => {
    return (
     <div key={4}>
        <p>{a}</p>
     </div>
    );
  });
  console.log(firstWeek);
  return (
    <div className="WeeklyTemplate">
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
 }}

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

oneRepMax = (weight, reps) => {
    let max = (weight * reps * 0.0333 + weight) * 0.9;
    return Math.ceil(max);
  };
onCalculate = (event) => {
    let BenchValues = this.oneRepMax(parseInt(this.refs.BenchWeight.value), parseInt(this.refs.BenchReps.value));
    let OverheadValues = this.oneRepMax(parseInt(this.refs.OverheadWeight.value), parseInt(this.refs.OverheadReps.value));
    let DeadliftValues = this.oneRepMax(parseInt(this.refs.DeadliftWeight.value), parseInt(this.refs.DeadliftReps.value));
    let SquatValues = this.oneRepMax(parseInt(this.refs.SquatWeight.value), parseInt(this.refs.SquatReps.value));
    let BenchTemplate = this.weeklyTemplate(this.refs.BenchWeight.value, this.refs.BenchReps.value);
    let OverheadTemplate = this.weeklyTemplate(this.refs.OverheadWeight.value, this.refs.OverheadReps.value);
    let DeadliftTemplate = this.weeklyTemplate(this.refs.DeadliftWeight.value, this.refs.DeadliftReps.value);
    let SquatTemplate = this.weeklyTemplate(this.refs.SquatWeight.value, this.refs.SquatReps.value);
    this.setState({
        Bench: BenchValues,
        Overhead: OverheadValues,
        Deadlift: DeadliftValues,
        Squat: SquatValues,
    })     
}

// FillinStats = event => {
//     this.bench.value = this.state.Bench
//     this.Overheadlift.value = this.state.Overhead
//     this.Deadlift.value = this.state.Deadlift
//     this.Squat.value = this.state.Squat
// }

    renderMaxes = () => {
        if (this.state.Bench) {
            console.log(this.state)
            return (
                <div>
                  <h4>Bench: {this.state.Bench}</h4>
                  <h4>Overhead: {this.state.Overhead}</h4>
                  <h4>Deadlift: {this.state.Deadlift}</h4>
                  <h4>Squat: {this.state.Squat}</h4>
                  <button type="button" className="btn btn-primary">
                    <span className="md-"></span> Fill in stats
                  </button>
                </div>
            )
        }
    }
  render(){
      return(
          <div>
          {!this.state.Bench && (<div>
            <label>Bench Press</label>
            <br/>
            <input type="text" placeholder="Weight" ref="BenchWeight"/>
            <input type="text" placeholder="Reps" ref="BenchReps"/> 
            <br/>
            <label>Overhead Press</label>
            <br/>
            <input type="text" placeholder="Weight" ref="OverheadWeight"/>
            <input type="text" placeholder="Reps" ref="OverheadReps"/> 
            <br/>
            <label>Deadlift</label>
            <br/>
            <input type="text" placeholder="Weight" ref="DeadliftWeight"/>
            <input type="text" placeholder="Reps" ref="DeadliftReps"/> 
            <br/>
            <label>Squat</label>
            <br/>
            <input type="text" placeholder="Weight" ref="SquatWeight"/>
            <input type="text" placeholder="Reps" ref="SquatReps"/> 
            <br/>
            <button type="button" className="btn btn-primary" onClick={event => this.onCalculate(event)}>
                <span className="md-"></span> Calculate
            </button>
          </div>)}
            <div>{this.renderMaxes()}</div>
          </div>
      )
    } 
}

const mapStateToProps = state => {
    return { state };
  };
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch);
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Calculator);