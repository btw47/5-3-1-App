import React, { Component } from "react";
import events from './events'
import { firebaseApp } from '../server/firebase';
import { DragDropContext } from 'react-dnd';
import BigCalendar from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import "react-big-calendar/lib/addons/dragAndDrop/styles.less";

const DragAndDropCalendar = withDragAndDrop(BigCalendar);

class DnD extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      events: events
    }

    this.moveEvent = this.moveEvent.bind(this)
  }

  moveEvent({event, start, end}){
    const {events} = this.state;

    const idx = events.indexOf(event);
    const updatedEvent = {...event, start, end};
  
    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)

    this.setState({
      events: nextEvents
    })
  }

  render() {
    return (
      <DragAndDropCalendar
       selectabel
       events={this.state.events}
       defaultView='week'
       onEventDrop={new Date(2017, 10, 24)}
      /> 
    )
  }
}

export default DragDropContext(firebaseApp)(DnD)
