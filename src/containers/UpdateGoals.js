import React, { Component } from 'react';
import DaysSplit from '../components/splitDays';
import WorkoutDays from '../components/workoutDays';
import Exercises from '../components/exercises';
import FitnessGoalText from '../components/fitnessGoalText';

export default class UpdateGoals extends Component {
  render() {
    return (
      <div>
        <h2>Update goals below and kiss titties later</h2>

        <form>
          <DaysSplit />
          <WorkoutDays />
          <FitnessGoalText />
          <Exercises />
        </form>
      </div>
    );
  }
}

// Just like with any other React component type, value and checked are component
// properties. However, checked is an interactive property,
// because it's affected via user interactions: user can select it and unselect it
// by selecting another radio button.

//STATE -- We know that if React component can render different things,
//then it has to maintain state that tells it which thing to render.
