import React, { Component } from 'react';
import DumbGraph from './DumbAreaGraph';
import { Tab } from 'react-bootstrap';

const ProgressGraphTab = props => {
  console.log('TAB PROPS', props);
  return (
    <Tab eventKey={props.eventKey} title={props.title}>
      <DumbGraph
        title={props.title}
        data={props.data}
        dataKey={props.dataKey}
        height={props.height}
        color={props.color}
      />
    </Tab>
  );
};

export default ProgressGraphTab;
