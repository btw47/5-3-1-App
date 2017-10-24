import React, { Component } from "react";
import InputBar from "../components/InputBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <InputBar />
        <Footer />
      </div>
    );
  }
}

export default App;
