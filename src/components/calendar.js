import React, { Component } from "react";
import moment from 'moment';
import { connect } from 'react-redux'
import Popup from 'react-popup';
import * as actions from '../actions';
import firebase from 'firebase';


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
    super(props)

  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        window.location = '/';
      } else if (user) {
        const thisUser = firebase.auth().currentUser;

      }
    })
  }

    render(){
        let userEvents=[null];
      if (this.props.state.user.selectedExercise === "boringButBig") {
        userEvents = BBB
      }

        return(
        <div>
            <BigCalendar
              {...this.props}
              popup
              selectable
              step= {'allday'} 
              events = {userEvents}
              defaultView = 'week'
              views = {{ week: true }}
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


export default connect(mapStateToProps)(Dnd);

