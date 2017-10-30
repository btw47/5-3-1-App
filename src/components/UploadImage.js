import React, { Component } from 'react';
import firebase from 'firebase';
import ImageUploader from 'react-firebase-image-uploader';

class UploadImage extends Component {
  state = {
    isUploading: false,
    progress: 0,
  };

  // handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  // handleProgress = progress => this.setState({ progress });
  // handleUploadError = error => {
  //   this.setState({ isUploading: false });
  //   console.error(error);
  // };
  // handleUploadSuccess = event => {
  //   this.setState({ avatar: 'profile.jpg', progress: 100, isUploading: false });
  //
  // const storageRef = firebase.storage.ref(this.props.userId + 'profile.jpg');
  // const firstFile = event.target.file[0];
  // const uploadTask = storageRef.put(firstFile);

  //   firebase
  //     .storage()
  //     .ref(this.props.userId)
  //     .child('profile.jpg')
  //     .getDownloadURL()
  //     .then(url => this.setState({ avatarURL: url }));
  // };
  // };

  handleChange = event => {
    let imageBlob = new Blob(event.target.value);

    this.setState({
      image: imageBlob,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const storageRef = firebase
      .storage()
      .ref(this.props.userId + 'profile.jpg');
    const uploadTask = storageRef.put(this.state.image);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          {/* {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
          {this.state.avatarURL && <img src={this.state.avatarURL} />} */}
          <input type="file" onChange={event => this.handleChange(event)} />
          {/* <ImageUploader
            name="avatar"
            storageRef={firebase.storage().ref(this.props.userId)}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onProgress={this.handleProgress}
          /> */}
          <button type="submit">Set Profile Picture</button>
        </form>
      </div>
    );
  }
}

export default UploadImage;
