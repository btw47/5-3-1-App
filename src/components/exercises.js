import React, { Component } from "react";

export default class Exercises extends Component {
  render() {
    return (
      <div>
        <h4>Preferred Exercise Template Radio Button</h4>
        <label>Boring But Big</label>
        <input name="exercise" type="radio" value="boring but big" />
        <br />
        <label>Trumvirate</label>
        <input name="exercise" type="radio" value="trium" />
        <br />
        <label>I'm Not Doing Jack Shit</label>
        <input name="exercise" type="radio" value="jackShit" />
        <br />
        <label>Periodization Bible</label>
        <input name="exercise" type="radio" value="perBible" />
        <br />
        <label>Bodyweight</label>
        <input name="exercise" type="radio" value="body" />
      </div>
    );
  }
}
