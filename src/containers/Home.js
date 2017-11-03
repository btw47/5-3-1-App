import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import logo from "../images/weight-lifting-logo.png";
import SignUp from "../components/auth/SignUp";
import ConnectWithUs from "../components/ConnectWithUs";
import OurMission from "../components/OurMission";
import Footer from "../components/Footer";
import * as actions from "../actions";
import "../css/App.css";

class Home extends Component {
  handleError = () => {
    if (this.props.state.auth.error) {
      return this.props.state.auth.error;
    } else {
      return null;
    }
  };

  render() {
    const { createUser } = this.props;
    return (
      <div>
        <div>
          <img src={logo} className="logo" alt="" />
        </div>
        <SignUp createUser={createUser} error={this.handleError()} />
        <ConnectWithUs />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
