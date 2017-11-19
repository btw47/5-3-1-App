import React, { Component } from "react";
import firebase from "firebase";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col } from "react-bootstrap";
import "../../css/Dashboard.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import WeekCalendar from "../calendar";
import UserStats from "../UserStats";
import UpdateProfile from '../../containers/SetProfile';
import UploadImage from "../UploadImage";
import DashboardGraph from "../graphs/DashboardGraph";
import { firebaseDb } from "../../server/firebase";
import UpdateProfileModal from "../../containers/UpdateProfileModal";
import * as actions from "../../actions";
import Popup from 'react-popup';
import { Button, ButtonToolbar } from "react-bootstrap";


class Dashboard extends Component {
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.props.history.push("/");
      } else if (user) {
        const thisUser = firebase.auth().currentUser;
        const uid = thisUser.uid;

        firebaseDb.ref("users/" + uid + "/user/").on("value", snapshot => {
          const firebaseOutput = snapshot.val();

          const uploadList = [];
          for (let prop in firebaseOutput) {
            uploadList.push(prop);
          }

          if (uploadList.length === 0) {
            this.props.history.push("/SetProfile");
          } else {
            this.props.fetchCalendar(thisUser);
            this.props.fetchProfileImage(thisUser.uid);
            this.props.fetchUser(thisUser);
            this.props.fetchOldStats(thisUser);
            this.props.fetchProgress(thisUser);
            this.props.loggedIn();
          }
        });
      }
    });
  }
  // componentDidUpdate(){
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (!user) {
  //       this.props.history.push("/");
  //     } else if (user) {
  //       const thisUser = firebase.auth().currentUser;
  //       const uid = thisUser.uid;

  //       firebaseDb.ref("users/" + uid + "/user/").on("value", snapshot => {
  //         const firebaseOutput = snapshot.val();

  //         const uploadList = [];
  //         for (let prop in firebaseOutput) {
  //           uploadList.push(prop);
  //         }

  //         if (uploadList.length === 0) {
  //           this.props.history.push("/SetProfile");
  //         } else {
  //           this.props.fetchCalendar(thisUser);
  //         }
  //       });
  //     }
  //   });
  // }
  // changeWorkout = event => {
  //   this.props.history.push('/GoalsUpdate');
  // }

  onStatsUpdate(event){
    Popup.alert(<UpdateProfile/>, "Update Stats")
  }

  render() {
    const { state } = this.props;
    // const thisUser = firebase.auth().currentUser;

    return (
      <div className="textlayout">
        <br />
        <Row>
          <Col md={4} sm={12} style={{ paddingLeft: "50px" }}>
            <UserStats
              className="UserStats"
              user={state.user}
              fetchUser={this.props.fetchUser}
              fetchProfileImage={this.props.fetchProfileImage}
              profileImage={state.user.profileImage}
            />
            <div>
            <ButtonToolbar className="centerhomepage">
              <div className="btnwrap">
                <Button
                  type="button"
                  className="coolbtn"
                  onClick={event => this.onStatsUpdate(event)}
                >
                Update Stats
                </Button>
              </div>
              <br />
              <UploadImage
                fetchProfileImage={this.props.fetchProfileImage}
                userId={state.user.uid}
                style={{ display: "inline-block" }}
                type="profile"
                fetchUserImages={this.props.fetchUserImages}
                caption="Upload profile picture"
              />
              </ButtonToolbar>
            </div>
          </Col>
          <Col md={6} mdOffset={2} small={12} style={{ paddingRight: "50px" }}>
            <DashboardGraph />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <WeekCalendar
              style={{ margin: "50px" }}
              view="week"
              views={{ week: true }}
            />
          </Col>
        </Row>
        <Popup
        className="mm-popup"
        btnClass="mm-popup__btn"
        closeBtn={true}
        closeHtml={null}
        defaultOk="Close"
        defaultCancel="Cancel"
        wildClasses={false}
      />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
