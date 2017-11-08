import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import Image from "./Image";
import Gallery from '../components/photos';
import * as actions from '../actions';
import '../css/gallery.css';

class PhotoGallery extends Component {
  render() {
    console.log('APP PROPS', this.props);
    return (
      <div className="App">
        <h4 style={{ 'text-align': 'center' }}>No dickpics plz</h4>
        <Gallery imageList={this.props.state.user} />
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
