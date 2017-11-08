import React, { Component } from 'react';
import '../../css/gallery.css';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  increment = () => {
    const newIndex = this.state.index + 1;
    this.setState({
      index: newIndex
    });
  };

  decrement = () => {
    const newIndex = this.state.index - 1;
    this.setState({
      index: newIndex
    });
  };

  render() {
    // console.log('GALLERY STATE', this.state.index);
    // const searched = this.props.imageList[0];
    let urlList = [];
    // let currentIndex = this.state.index;

    if (searched) {
      urlList = this.props.imageList[1].map(a => {
        return <img alt="img" key={a.id} src={a.urls.small} />;
      });
    }

    console.log('GALLERY PROPS', this.props);
    return (
      <div className="image-gallery">
        <div className="gallery-image">{urlList[this.state.index]}</div>

        {urlList.length > 0 && (
          <button onClick={() => this.increment()}>next</button>
        )}
        {this.state.index != 0 && (
          <button onClick={() => this.decrement()}>back</button>
        )}
      </div>
    );
  }
}
