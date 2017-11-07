import React, { Component } from "react";
import moment from 'moment';
import { connect } from 'react-redux'
import Popup from 'react-popup';
import * as actions from '../actions';
import firebase from 'firebase';
import { bindActionCreators } from 'redux';


import 'react-big-calendar/lib/addons/dragAndDrop/styles.less';
import BigCalendar from 'react-big-calendar';
import BBB from './WorkoutTemplates/BBB';

import 'react-big-calendar/lib/less/styles.less';
import './calendar.css';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
)


function Event({ event }) {
  return(
    <span>
      <strong>{event.title}</strong>
    </span>
  )
}

class Dnd extends React.Component{
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        window.location = '/';
      } else if (user) {
        const thisUser = firebase.auth().currentUser;
        // this.props.fetchCalendar(thisUser)
        // console.log("SELECTED EXERCISE", this.props.state.calendar.selectedExercise)
      }

    })
  }



  render(){
    const {state } = this.props
    console.log("THIS STATE", this.state)
    console.log("THIS PROPS", this.props)
    let userEvents = [null];
    if (state.fetchCalendar.calendar) {
      if (state.fetchCalendar.calendar.selectedExercise === "boringButBig") {
        console.log("COME ON BITCH", this.state)
        userEvents = BBB
      } else {
        console.log("SHIIT")
        userEvents
      }
    }
    return(
      <div>
        <BigCalendar
        {...this.props}
        popup
        selectable
        step= {'allday'} 
        events = {userEvents}
        defaultView = 'month'
        views = {{ month: true }}
        scrollToTime={new Date(1970, 1, 1, 6)}
        defaultDate={new Date(2017, 9, 17)}
        test='io'
        onSelectEvent= {event => Popup.alert(event.desc, 'Description')}
        components = {{
        event: Event,
        }}
        />
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
        )
    }
}

const mapStateToProps = state => {
  return{state}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Dnd);