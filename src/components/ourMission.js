import React from "react";
import chart from "../images/comp-app-chart.PNG";

var ourMission = () => {
  return (
    <div>
      <h2>Our Mission</h2>
      <img className="chart-img" src={chart} alt="" />
      <p>
        The 5/3/1 Strength Training Program by Wendler is one of the most proven
        strength training programs available. My developement team wanted to
        take the core principles of 5/3/1 and jam them into an intuitive app. We
        also added some interactive features to keep you motivated, such as
        personal progress charts and chat forums. This 5/3/1 App does all the
        heavy thinking for you, so that you can focus on the heavy lifting. Our
        app will calculate your 1 Rep Max, all we need to know is what days
        you'd like to workout and we'll develope your workout program for you.
        It's just that fucking easy. Now get to work and enjoy the 5/3/1 gains.
      </p>
      <br />
      <h2>Our Vision</h2>
      <p>
        To provide the community with a training template app that follows the
        5/3/1 program principles in order to make strength gains as easy as
        possible for our users.
      </p>
    </div>
  );
};

export default ourMission;
