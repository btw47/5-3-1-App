import React, { Component } from 'react';

class Calculator extends Component {

oneRepMax = (weight, reps) => {
    let max = (weight * reps * 0.0333 + weight) * 0.9;
    return Math.ceil(max);
  };
onCalculate = event => {

}
  render(){
      return(
          <div>
            <label>Bench Press</label>
            <br/>
            <input type="text" placeholder="Weight"/>
            <input type="text" placeholder="Reps"/> 
            <br/>
            <label>Overhead Press</label>
            <br/>
            <input type="text" placeholder="Weight"/>
            <input type="text" placeholder="Reps"/> 
            <br/>
            <label>Deadlift</label>
            <br/>
            <input type="text" placeholder="Weight"/>
            <input type="text" placeholder="Reps"/> 
            <br/>
            <label>Squat</label>
            <br/>
            <input type="text" placeholder="Weight"/>
            <input type="text" placeholder="Reps"/> 
            <br/>
            <button type="button" class="btn btn-primary">
                <span class="md-"></span> Calculate
            </button>
          </div>
      )
  }

}

export default Calculator;