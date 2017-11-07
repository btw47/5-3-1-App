import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Panel, PanelGroup } from 'react-bootstrap';

import * as actions from '../actions';
import profilePicture from '../images/anon-user.jpg';
import UploadImage from './UploadImage';

class UserStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: '1'
    };
  }

  componentWillMount() {
    this.renderImage();

    console.log('FUNCTION CALLED');
  }

  handleSelect = activeKey => {
    this.setState({
      activeKey
    });
  };

  renderImage = () => {
    if (this.props.profileImage === null) {
      const { user } = this.props;

      return (
        <div>
          <img src={profilePicture} alt="profile pic" style={this.imageStyle} />
        </div>
      );
    } else {
      return (
        <div>
          <img src={this.props.profileImage} style={this.imageStyle} />
        </div>
      );
    }
  };

  style = {
    height: '30vh',
    width: '15vw'
  };

  imageStyle = {
    width: '12vw'
  };

  render() {
    const { user } = this.props;
    return (
      <div>
        {this.renderImage()}
        <PanelGroup
          activeKey={this.state.activeKey}
          onSelect={this.handleSelect}
          accordion
          style={{ width: '12vw' }}>
          <Panel header="About Me" eventKey="1">
            Panel 1 content
          </Panel>
          <Panel header="Current Stats" eventKey="2">
            <h6>Current Weight: {user.weight}</h6>
            <h6>Bench: {user.ormBench}</h6>
            <h6>Overhead Press: {user.ormOverheadPress}</h6>
            <h6>Squats: {user.ormSquat}</h6>
            <h6>Deadlift: {user.ormDeadlift}</h6>
          </Panel>
        </PanelGroup>
        {/* <div>
          {this.renderImage()}
          <h3>{user.fullName}</h3>
          <div>
            <h6>Current Weight: {user.weight}</h6>
            <h6>Bench: {user.ormBench}</h6>
            <h6>Overhead Press: {user.ormOverheadPress}</h6>
            <h6>Squats: {user.ormSquat}</h6>
            <h6>Deadlift: {user.ormDeadlift}</h6>
          </div>
        </div> */}
      </div>
    );
  }
}

export default UserStats;
