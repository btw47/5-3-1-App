import React, { Component } from 'react';
import { filestackDb } from '../server/filestack';

export default class UploadImage extends Component {
  renderPicker = () => {
    const ratio = 7 / 8;
    filestackDb.pick({
      // imageDim: [150, 170],
      transformations: {
        crop: {
          aspectRatio: ratio,
          force: true,
        },
      },
    });
  };

  render() {
    return (
      <div className="class-name">
        <h1>TEST</h1>
        <button onClick={() => this.renderPicker()}>upload</button>
      </div>
    );
  }
}
