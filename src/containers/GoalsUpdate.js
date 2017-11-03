import React, { Component } from "react";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';
import {NavLink} from 'react-router-dom';
import { firebaseDb } from '../server/firebase';
import firebase from 'firebase';

// function loopForm(form){
//     var cbResults = 'Checkboxes: ';
//     var radioResults = 'Radio Buttons: ';
//     for(var i = 0; i < form.elements.length; i++){
//         if(form.elements[i].checked === true){
//             if(form.elements[i].type === 'Checkbox'){
//                 console.log(form.elements[i].name)
//                 return form.elements[i].name
//             }
//         }
//     }
// }

class GoalUpdate extends Component {
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        window.location = '/';
      } else if (user) {
        const thisUser = firebase.auth().currentUser;

        this.props.loggedIn();
      }
    });
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleDayChange = event => {
    this.setState({
      selectedDay: event.target.value
    });
    console.log(this.state)
  };

  handleWeekdayChange = (newDays) => {
    // if(event.target.value = false){
    //     event.target.value = true
    // }else if (event.target.value = true){
    //     event.target.value = false
    // }
           
    // if(event.target.value = true){
      console.log(this.state)
      this.setState({
        selectedWeekdays: newDays
      });
        
    //}
  };

  handleExerciseChange = event => {
    this.setState({
      selectedExercise: event.target.value
    });
  };

  

    handleSubmit = event => {
      event.preventDefault();
    //   loopForm(this.refs.goalUpdateForm)
      // this.props.userInput( this.state.selectedDay, this.state.selectedWeekdays, this.state.selectedExercise )
      if (!this.state.selectedDay || !this.state.selectedWeekdays || !this.state.selectedExercise) {
        alert('Fill out all your stats bro');
      } else {
        const thisUser = firebase.auth().currentUser;
        if (thisUser != null) {
          var uid = thisUser.uid;
        }
        const date = Date();
        // this.setState({
        //   calendar:{
        //     selectedDay: this.selectedDay.value,
        //     selectedWeekdays: this.selectedWeekdays.value,
        //     selectedExercise: this.selectedExercise.value,
        //     date: date,
        //     }
        // })
        console.log("SET STATE", this.state)
        // const { selectedDay, selectedWeekdays, selectedExercise } = this.state;
        firebaseDb
          .ref('users/' + uid)
          .push({
            calendar: {
              selectedDay: this.state.selectedDay,
              selectedWeekdays: this.state.selectedWeekdays,
              selectedExercise: this.state.selectedExercise,
            },
            date: date
          })

      }
      console.log(this.state)
    };


  render() {
    return (
      <div>
        <h2>Update goals below fam!</h2>
        <form ref='goalUpdateForm' onSubmit={event => this.handleSubmit(event)}>
          <h4>What is your overall fitness goal?</h4>
          <label>Hey pussy</label>
          <input
            type="text"
            placeholder="insert your pussy goals here you pussy"
          />
          <br />
          <h4>Split (Lifting Days per Week)</h4>
          <label>2 Days</label>
          <input
            name="days"
            ref="twoDays"
            type="radio"
            value="2days"
            checked={this.state.selectedDay === "2days"}
            onChange={this.handleDayChange}
          />
          <br />
          <label>3 Days</label>
          <input
            name="days"
            type="radio"
            ref="threeDays"
            value="3days"
            checked={this.state.selectedDay === "3days"}
            onChange={this.handleDayChange}
          />
          <br />
          <label>4 Days</label>
          <input
            name="days"
            type="radio"
            ref="fourDays"
            value="4days"
            checked={this.state.selectedDay === "4days"}
            onChange={this.handleDayChange}
          />

          {/* How do we make sure that our component's state changes when user clicks on our radio buttons?
React offers onChange property that we can pass to our <input> components to handle changes. We then create an onChange 
function that updates the state of our buttons */}

          <br />
          <h4>That's great pansyboy! What days will you be exercising on?</h4>
          <label>Days of the week</label>
          <br />
          <CheckboxGroup
            name='weekdays'
            value={this.state.selectedWeekdays}
            onChange={this.handleWeekdayChange}>
            <label><Checkbox ref="checkbox" value="monday"/>Monday</label>
            <br/>
            <label><Checkbox ref="checkbox" value="tuesday"/>Tuesday</label>
            <br/>
            <label><Checkbox ref="checkbox" value="wednesday"/>Wednesday</label>
            <br/>
            <label><Checkbox ref="checkbox" value="thursday"/>Thursday</label>
            <br/>
            <label><Checkbox ref="checkbox" value="friday"/>Friday</label>
            <br/>
            <label><Checkbox ref="checkbox" value="saturday"/>Saturday</label>
            <br/>
            <label><Checkbox ref="checkbox" value="sunday"/>Sunday</label>
          </CheckboxGroup>

          <br />
          <h4>Preferred Exercise Template Radio Button</h4>
          <label>Boring But Big</label>
          <input
            name="exercise"
            type="radio"
            value="boringButBig"
            checked={this.state.selectedExercise === "boringButBig"}
            onChange={this.handleExerciseChange}
          />
          <br />
          <label>Triumvirate</label>
          <input
            name="exercise"
            type="radio"
            value="triumvirate"
            checked={this.state.selectedExercise === "triumvirate"}
            onChange={this.handleExerciseChange}
          />
          <br />
          <label>I'm Not Doing Jack Shit</label>
          <input
            name="exercise"
            type="radio"
            value="jackShit"
            checked={this.state.selectedExercise === "jackShit"}
            onChange={this.handleExerciseChange}
          />
          <br />
          <label>Periodization Bible</label>
          <input
            name="exercise"
            type="radio"
            value="perBible"
            checked={this.state.selectedExercise === "perBible"}
            onChange={this.handleExerciseChange}
          />
          <br />
          <label>Bodyweight</label>
          <input
            name="exercise"
            type="radio"
            value="bodyweight"
            checked={this.state.selectedExercise === "bodyweight"}
            onChange={this.handleExerciseChange}
          />
          <br />
            <button type="submit" >Submit My Motherfucking Goals</button>
        </form>
      <div ref='cbResults'></div>
      <div ref='radioResults'></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return{ state };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalUpdate)
