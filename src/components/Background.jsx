import React from 'react';
import { connect } from 'react-redux'

class Background extends React.Component {
  render() {
    return (
      <div className="background-container">
        <div className="background-image background-preview"></div>
        <div className="background-image"></div>
        <div className="background-image blur-8" style={{opacity: this.props.screen === 4 ? 1: 0}}></div>
        <div className="background-image blur-6" style={{opacity: this.props.screen === 3 ? 1: 0}}></div>
        <div className="background-image blur-4" style={{opacity: this.props.screen === 2 ? 1: 0}}></div>
        <div className="background-image blur-2" style={{opacity: this.props.screen === 1 ? 1: 0}}></div>
        <div className={`dark-shape form-${this.props.screen}`}></div>
      </div>
    );
  }
}

export default connect(a => a)(Background);