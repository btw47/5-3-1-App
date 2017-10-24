import React, { Component } from "react";

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class ConnectWithUs extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Meet the Team</h1>
          <h2>
            <li>
              Bradley Wong
              <br />
              <img src="https://www.facebook.com/photo.php?fbid=10214782319332417&set=a.1590497883198.2075140.1258380342&type=3&theater" />
            </li>
            <li>
              JD Headbanger
              <br />
              <img src="https://www.facebook.com/photo.php?fbid=10206851415724249&set=a.1263752414231.33786.1842367662&type=3&theater" />
            </li>
            <li>
              James Bell
              <br />
              <a href="https://www.facebook.com/JamesMB828">Facebook</a>
              <img src="https://www.facebook.com/photo.php?fbid=10155430776282931&set=t.531747930&type=3&theater" />
            </li>
            <li>
              Ryan Fuchs
              <br />
              <a href="https://www.facebook.com/ryan.fuchs.50">Facebook</a>
              <img src="https://www.facebook.com/photo.php?fbid=10206390957251759&set=a.1264977123532.32890.1802898403&type=3&theater" />
            </li>
          </h2>
        </div>
      </Router>
    );
  }
}

export default ConnectWithUs;
