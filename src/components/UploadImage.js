import React, { Component } from 'react';
import { filestackDb } from '../server/filestack';

export default class UploadImage extends Component {
  renderPicker = () => {
    const ratio = 1 / 1;
    filestackDb
      .pick({
        transformations: {
          crop: {
            aspectRatio: ratio,
            force: true,
          },
        },
      })
      .then(function(response) {
        console.log(response.filesUploaded[0].url);
      });
  };

  render() {
    return (
      <div className="class-name">
        <button onClick={() => this.renderPicker()}>upload</button>
      </div>
    );
  }
}
