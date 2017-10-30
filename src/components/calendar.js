import React, { Component } from "react";
import moment from 'moment';
import events from './events';
import dates from 'date-arithmetic';

import TimeGrid from 'react-big-calendar/lib/TimeGrid';
import localizer from 'react-big-calendar/lib/localizer';
import BigCalendar from 'react-big-calendar';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
)

// const getRange = (date, culture) => {
//   let firstOfWeek = localizer.startOfWeek(culture);
//   let start = dates.startOf(date, 'week', firstOfWeek);
//   let end = dates.endOf(date, 'week', firstOfWeek);

//   if (firstOfWeek === 1){
//     end = dates.subtract(end, 2, 'day');
//   }else {
//     start = dates.add(start, 1, 'day');
//     end = dates.subtract(end, 1, 'day');
//   }

//   return dates.range(start, end)

// }

// class MyWeek extends React.Component{
//   render(){
//     let { date, culture } = this.props;
//     let range = getRange(date, culture)
//     return(
//       <TimeGrid {...this.props} range={range} eventOffset={15} />
//     )
//   }
// }

// MyWeek.navigate = (date, action) => {
//   switch (action){
//     case BigCalendar.Navigate.PREVIOUS:
//       return dates.add(date, -1, 'week');
//     case BigCalendar.Navigate.NEXT:
//       return dates.add(date, 1, 'week')
//     default:
//       return dates;  
//   }
// }

// MyWeek.title = (dates, {formats: formats, culture: culture }) => {
//   return `My Workouts: ${Date.toLocaleString()}`
// }

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
              selectable = {true} 
              step = '120'
              events = {events}
              defaultView = 'week'
              views = {{week: true}}
              scrollToTime={new Date(1970, 1, 1, 6)}
              defaultDate= {new Date(2017, 9, 25)}
              
            />
        </div>  
        )
    }
}

export default WeekCalendar;

