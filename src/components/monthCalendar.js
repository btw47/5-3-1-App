import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Popup from 'react-popup';
import * as actions from '../actions';
import firebase from 'firebase';
import { bindActionCreators } from 'redux';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.less';
import BigCalendar from 'react-big-calendar';
import {BBB4days, BBB3days, BBB2days} from './WorkoutTemplates/BBB';

import 'react-big-calendar/lib/less/styles.less';
import './calendar.css';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

function Event({ event }) {
  return (
    <span>
      <strong>{event.title}</strong>
    </span>
  );
}

class Dnd extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        window.location = '/';
      } else if (user) {
        const thisUser = firebase.auth().currentUser;
        // this.props.fetchCalendar(thisUser)
        // console.log("SELECTED EXERCISE", this.props.state.calendar.selectedExercise)
      }
    });
  }

  render() {
    const { state } = this.props;
    console.log('THIS STATE', this.state);
    console.log('THIS PROPS', this.props);
    let userEvents = [null];
    if (state.fetchCalendar.calendar) {
      if (state.fetchCalendar.calendar.selectedWeekday) {
        console.log('IF WORKING BITCH');
        var day1;
        var day2;
        var day3;
        var day4;

        for (
          var i = 0;
          i < state.fetchCalendar.calendar.selectedWeekday.length;
          i++
        ) {
          day1 = state.fetchCalendar.calendar.selectedWeekday[0];
          day2 = state.fetchCalendar.calendar.selectedWeekday[1];
          day3 = state.fetchCalendar.calendar.selectedWeekday[2];
          day4 = state.fetchCalendar.calendar.selectedWeekday[3];
        }

        if (!this.state.fetched) {
          this.setState({ fetched: true });
        }
      }
    }

    if (state.fetchCalendar.calendar) {
     if(state.fetchCalendar.calendar.selectedExercise === 'boringButBig'){
      if (state.fetchCalendar.calendar.selectedDay === '4days') {
        console.log('COME ON BITCH', this.state);
        userEvents = BBB4days({ day1, day2, day3, day4 });
      } else if (state.fetchCalendar.calendar.selectedDay === '3days'){
        userEvents = BBB3days({day1, day2, day3})
      } else if (state.fetchCalendar.calendar.selectedDay === '2days'){
        userEvents = BBB2days({day1, day2})
      } else {
        userEvents = [];
      }
    }
    }

    console.log('SELECTED DAYS', day1, day2, day3, day4);

    return (
      <div>
        {this.state.fetched && (
          <BigCalendar
            {...this.props}
            popup
            selectable
            step={'allday'}
            events={userEvents}
            defaultView="week"
            views={{ week: true }}
            scrollToTime={new Date(2017, 1, 1, 6)}
            test="io"
            onSelectEvent={event => Popup.alert(event.desc, event.title)}
            components={{
              event: Event
            }}
          />
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(
  Dnd,
  this.day1,
  this.day2,
  this.day3,
  this.day4
);
