import React from 'react';
import BBB from './WorkoutTemplates/BBB';
import firebase from 'firebase'

const userEvent = exercisePlan => {
      let userEvents=[null];
      if (exercisePlan === "boringButBig") {
        console.log("COME ON BITCH", this.props)
        return BBB
      } else {
        console.log("IF NOT WORKING")
      }
    
}

export default userEvent;

