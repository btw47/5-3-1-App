import React, { Component } from 'react';
import firebase from 'firebase';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Gallery from '../components/photos/Gallery';
import { firebaseDb } from '../server/firebase';
import * as actions from '../actions';
import '../css/gallery.css';
import UploadImage from '../components/UploadImage';

class PhotoGallery extends Component {
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.props.history.push('/');
      } else if (user) {
        const thisUser = firebase.auth().currentUser;
        const uid = thisUser.uid;

        firebaseDb.ref('users/' + uid).on('value', snapshot => {
          const firebaseOutput = snapshot.val();

          const uploadList = [];
          for (let prop in firebaseOutput) {
            uploadList.push(prop);
          }

          if (uploadList.length === 0) {
            this.props.history.push('/SetProfile');
          } else {
            this.props.fetchCalendar(thisUser);
            this.props.fetchUserImages(thisUser.uid);
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

  render() {
    const { state } = this.props;
    console.log('APP PROPS', this.props);
    return (
      <div className="App">
        <h4 style={{ textAlign: 'center' }}>Here are your photos</h4>
        <Gallery imageList={state.user.userImages} />
        <UploadImage
          fetchProfileImage={this.props.fetchProfileImage}
          userId={state.user.uid}
          style={{ display: 'inline-block', margin: 'auto' }}
          type="other"
          fetchUserImages={this.props.fetchUserImages}
          caption="Upload your pictures"
        />
      </div>
    );
  }
}

const MapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(MapStateToProps, mapDispatchToProps)(PhotoGallery);
