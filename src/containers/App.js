import React, { Component } from 'react';
import InputBar from '../components/InputBar';
import logo from "../images/weight-lifting-logo.png";
import OurMission from '../components/ourMission';
import Calendar from '../components/calendar';
import "./App.css";


class App extends Component {

  render() {
    return (
      <div className="App">
        <div>
           <img src={logo} className="logo" alt=""/>
        </div>
        <InputBar />
        <OurMission />
      </div>
    );
  }
}

export default App;
