import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import logo from "../images/better-button-logo-best.png";
import SignUp from "../components/auth/SignUp";
import ConnectWithUs from "../components/ConnectWithUs";
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
    const { createUser, state } = this.props;
    console.log(this.props);
    return (
      <div className="container">
        <div className="content">
          <div className="row">
            <div>
              <div className="card">
                <div>
                  <img
                    src={logo}
                    className="logo"
                    alt="logo"
                    style={{ display: "block", margin: "auto" }}
                  />
                </div>
                <div className="text">
                  <SignUp
                    createUser={createUser}
                    error={this.handleError()}
                    authUI={state.auth.authUI}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ConnectWithUs />
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
