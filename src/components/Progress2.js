import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../css/App.css";

class Progress extends Component {
  render() {
    return (
      <div>
        <div>
          <div class="container">
            <div class="row">
              <div class="col">1 of 2</div>
              <div class="col">1 of 2</div>
            </div>
            <div class="row">
              <div class="col">1 of 3</div>
              <div class="col">1 of 3</div>
              <div class="col">1 of 3</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Progress;
