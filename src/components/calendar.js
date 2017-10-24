import React, { Component } from 'react';
import Calendar from 'react-calendar';


class FullCalendar extends React.Component{
    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })


    render(){
        return(
            <div>
            <Calendar
              onChange={this.onChange}
            />
          </div>
        )
    }
}

export default FullCalendar;