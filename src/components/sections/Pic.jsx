import React from 'react';
import { connect } from 'react-redux'

import { openPic, store } from '../../redux-store.js';

class Pic extends React.Component {
  constructor(props) {
    super(props);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
    this.state = {transform: ''};
  }
  toggleFullscreen (event) {
    this.setState({transform: movePicToCenter(event.target.parentNode)});
    if (store.getState().openedImage === event.target.parentNode.id) {
      openPic('');
    } else {
      openPic(event.target.parentNode.id);
    }
  }
  render() {
    const fullscreen = this.props.id === store.getState().openedImage;
    return (
      <figure 
       className={fullscreen ? 'pic-container pic-fullscreen' : 'pic-container'}
       id={this.props.id}
       style={fullscreen ? {transform: this.state.transform} : {}}
      >
        <img 
          src={this.props.img}
          alt={this.props.alt}
          onClick={this.toggleFullscreen}
          style={{
            transform: (this.props.rotate && !fullscreen) ? `rotate(${this.props.rotate})` : '',
            backgroundImage: this.props.preview ? `url(${this.props.preview})` : ''
          }}/>
        <figcaption>{this.props.caption}</figcaption>
      </figure>
    );
  }
}

const movePicToCenter = (picContainer) => {
  const moveY = (document.body.clientHeight / 2 + window.pageYOffset) -
    (picContainer.offsetTop + picContainer.offsetParent.offsetTop + picContainer.offsetHeight / 2);
  const moveX = (document.body.clientWidth / 2 + window.pageXOffset) -
    (picContainer.offsetLeft + picContainer.offsetParent.offsetLeft + picContainer.offsetWidth / 2);
  return `translate(${Math.round(moveX)}px, ${Math.round(moveY)}px)`;
}

export default connect(a => a)(Pic);