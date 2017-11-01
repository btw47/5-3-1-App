import React, { Component } from "react";
import moment from 'moment';
import events from './events';
import dates from 'date-arithmetic';
import Popup from 'react-popup';

import TimeGrid from 'react-big-calendar/lib/TimeGrid';
import localizer from 'react-big-calendar/lib/localizer';
import BigCalendar from 'react-big-calendar';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
)

class WeekCalendar extends Component {
    constructor(props, context) {
        super(props, context)
        
    }
    

    render(){
        return(
        <div className="WeekCalendar">
            <BigCalendar
              {...this.props}
              popup
              selectable 
              step = {'all day'}
              events = {events}
              defaultView = 'week'
              views = {{week: true}}
              scrollToTime={new Date(1970, 1, 1, 6)}
              defaultDate= {new Date(2017, 9, 25)}
              onSelectEvent= {event => Popup.alert(event.desc, event.title)}
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

export default WeekCalendar;

