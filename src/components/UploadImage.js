
import React, { Component } from "react";
import firebase from "firebase";


class UploadImage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSelect = event => {
    event.preventDefault();

    this.setState({
      image: event.target.value
    });
  };

  handleUpload = event => {
    event.preventDefault();
    console.log("CLICK");
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form
          onSubmit={event => {
            this.handleUpload(event);
          }}
        >
          <input type="file" onChange={event => this.handleSelect(event)} />
        </form>
      </div>
    );
  }
}

// class UploadImage extends Component {
//   state = {
//     username: '',
//     avatar: '',
//     isUploading: false,
//     progress: 0,
//     avatarURL: '',
//   };
//
//   handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
//   handleProgress = progress => this.setState({ progress });
//   handleUploadError = error => {
//     this.setState({ isUploading: false });
//     console.error(error);
//   };
//   handleUploadSuccess = filename => {
//     this.setState({ avatar: filename, progress: 100, isUploading: false });
//     firebase
//       .storage()
//       .ref('images')
//       .child(filename)
//       .getDownloadURL()
//       .then(url => this.setState({ avatarURL: url }));
//   };
//
//   render() {
//     return (
//       <div>
//         <form onSubmit={event => this.handleUploadSuccess(event)}>
//           {/* {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
//           {this.state.avatarURL && <img src={this.state.avatarURL} />} */}
//           <ImageUploader
//             name="avatar"
//             storageRef={firebase.storage().ref('images')}
//             onUploadStart={this.handleUploadStart}
//             onUploadError={this.handleUploadError}
//             onProgress={this.handleProgress}
//           />
//           <button type="submit">Set Profile Picture</button>
//         </form>
//       </div>
//     );
//   }
// }

export default UploadImage;
