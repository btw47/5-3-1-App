import React, { Component } from "react";
import moment from 'moment';
import events from './events'

import BigCalendar from 'react-big-calendar';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
)

// const getRange = ()

class calendar extends Component{
  constructor(props, context){
    super(props, context)
  }

  render(){
    return(
      <div className="calendar">
        <BigCalendar 
          height = {100}
          events = {events}
          step = {60}
          defaultView = 'week'
          views = {['week', 'agenda']}
          defaultDate={new Date}
          onSelecting={(range: {start: Date, end: Date}) => true }
          onSelectEvent={event => alert(event.title)}
        />
      </div>
    )
  }
}

export default calendar;

