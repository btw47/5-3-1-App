import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';
import { NavLink } from 'react-router-dom';
import { firebaseDb } from '../server/firebase';
import firebase from 'firebase';
import Popup from 'react-popup';
import '../css/GoalsUpdate.css';

import UserDescription from '../components/dashboard/UserDescription';

class GoalUpdate extends Component {
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.props.history.push('/');
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
    console.log(this.state);
  };

  handleWeekdayChange = newDays => {
    console.log(this.state);
    this.setState({
      selectedWeekday: newDays
    });
  };

  handleExerciseChange = event => {
    this.setState({
      selectedExercise: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      !this.state.selectedDay ||
      !this.state.selectedWeekday ||
      !this.state.selectedExercise
    ) {
      Popup.alert('Fill out all your stats bro');
    } else {
      const thisUser = firebase.auth().currentUser;
      if (thisUser != null) {
        var uid = thisUser.uid;
      }
      const date = Date();
      console.log('SET STATE', this.state);
      firebaseDb
        .ref('users/' + uid + '/calendar/')
        .push({
          calendar: {
            selectedDay: this.state.selectedDay,
            selectedWeekday: this.state.selectedWeekday,
            selectedExercise: this.state.selectedExercise
          },
          date: date
        })
        .then(() => {
          // this.props.history.push('/Dashboard');
          alert('Your workout plan has been updated.');
        });
    }
    console.log(this.state);
  };

  render() {
    // function checkboxlimit(checkgroup, limit){
    //   var checkgroup=checkgroup
    //   var limit=limit
    //   for (var i=0; i<checkgroup.length; i++){
    //     checkgroup[i].onclick=function(){
    //     var checkedcount=0
    //     for (var i=0; i<checkgroup.length; i++)
    //       checkedcount+=(checkgroup[i].checked)? 1 : 0
    //     if (checkedcount>limit){
    //       Popup.alert("You can only select a maximum of "+limit+" checkboxes")
    //       this.checked=false
    //       }
    //     }
    //   }
    // }
    if (this.state.selectedDay === '2days') {
    }
    return (
      <div className="goalUpdate">
        <h2>Update goals below fam!</h2>
        <UserDescription />
        <form ref="goalUpdateForm" onSubmit={event => this.handleSubmit(event)}>
          {/* <h4>What is your overall fitness goal?</h4>
          <input type="text" placeholder="insert your goals here" /> */}
          <br />
          <h4>Split (Lifting Days per Week)</h4>
          <label>2 Days</label>
          <input
            name="days"
            ref="twoDays"
            type="radio"
            value="2days"
            checked={this.state.selectedDay === '2days'}
            onChange={this.handleDayChange}
          />
          <br />
          <label>3 Days</label>
          <input
            name="days"
            type="radio"
            ref="threeDays"
            value="3days"
            checked={this.state.selectedDay === '3days'}
            onChange={this.handleDayChange}
          />
          <br />
          <label>4 Days</label>
          <input
            name="days"
            type="radio"
            ref="fourDays"
            value="4days"
            checked={this.state.selectedDay === '4days'}
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
            ref="weekdays"
            name="checkbox"
            checkboxDepth={2}
            value={this.state.selectedWeekday}
            onChange={this.handleWeekdayChange}>
            <label>
              <Checkbox name="checkbox" value={1} />Monday
            </label>
            <br />
            <label>
              <Checkbox name="checkbox" value={2} />Tuesday
            </label>
            <br />
            <label>
              <Checkbox name="checkbox" value={3} />Wednesday
            </label>
            <br />
            <label>
              <Checkbox name="checkbox" value={4} />Thursday
            </label>
            <br />
            <label>
              <Checkbox name="checkbox" value={5} />Friday
            </label>
            <br />
            <label>
              <Checkbox name="checkbox" value={6} />Saturday
            </label>
            <br />
            <label>
              <Checkbox name="checkbox" value={0} />Sunday
            </label>
          </CheckboxGroup>
          <br />
          <h4>Preferred Exercise Template Radio Button</h4>
          <label>Boring But Big</label>
          <input
            name="exercise"
            type="radio"
            value="boringButBig"
            checked={this.state.selectedExercise === 'boringButBig'}
            onChange={this.handleExerciseChange}
          />
          <br />
          <label>Triumvirate</label>
          <input
            name="exercise"
            type="radio"
            value="triumvirate"
            checked={this.state.selectedExercise === 'triumvirate'}
            onChange={this.handleExerciseChange}
          />
          <br />
          <label>I'm Not Doing Jack Shit</label>
          <input
            name="exercise"
            type="radio"
            value="jackShit"
            checked={this.state.selectedExercise === 'jackShit'}
            onChange={this.handleExerciseChange}
          />
          <br />
          <label>Periodization Bible</label>
          <input
            name="exercise"
            type="radio"
            value="perBible"
            checked={this.state.selectedExercise === 'perBible'}
            onChange={this.handleExerciseChange}
          />
          <br />
          <label>Bodyweight</label>
          <input
            name="exercise"
            type="radio"
            value="bodyweight"
            checked={this.state.selectedExercise === 'bodyweight'}
            onChange={this.handleExerciseChange}
          />
          <br />
          <button type="submit" class="btn btn-primary">
            <span class="md-" /> Submit My Goals
          </button>
        </form>
        <Popup
          className="mm-popup"
          btnClass="mm-popup__btn"
          closeBtn={true}
          closeHtml={null}
          defaultOk="Ok"
          defaultCancel="Cancel"
          wildClasses={false}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GoalUpdate);
