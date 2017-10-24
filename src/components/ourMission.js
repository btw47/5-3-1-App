import React from "react";
import chart from "../images/comp-app-chart.PNG";

var ourMission = () => {
  return (
    <div>
      <h2>Our Mission</h2>
      <img className="chart-img" src={chart} alt="" />
      <p>
        We saw there were a lot of differentt apps out there for 5/3/1 but most
        of them are just logs of your workouts instead of a full intergrated app
        that the user interacts with on a daily basis tracking every step of the
        way and adding a social aspect to the community so people can talk about
        their different routines and eating habbits.
      </p>
      <br />
      <h2>Our Vision</h2>
      <p>
        To provide the community with a training template app that follows the
        5/3/1 program principles
      </p>
    </div>
  );
};

export default ourMission;
