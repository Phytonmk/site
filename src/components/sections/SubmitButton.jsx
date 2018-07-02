import React from 'react';
import { connect } from 'react-redux'

import { setMsgStatus } from '../../redux-store.js';

class SubmitButton extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick (event) {
    event.preventDefault();
    if (this.props.msgStatus === 'typing') {
      setMsgStatus('sending');
    }
  }
  render() {
    let className = '';
    if (this.props.msgStatus === 'empty')
      className = 'invisible';
    else if (this.props.msgStatus === 'sending')
      className = 'processing';
    else if (this.props.msgStatus === 'delivered')
      className = 'completed';
    else if (this.props.msgStatus === 'error')
      className = 'completed';
    let text = 'Transfer';
    if (this.props.msgStatus === 'sending')
      text = 'Transfering...';
    else if (this.props.msgStatus === 'delivered')
      text = 'Transfered';
    else if (this.props.msgStatus === 'error')
      text = 'Error Ocured';
    return (
      <button onClick={this.handleClick} type="submit" className={className}>{text}</button>
    )
  }
}
export default connect(a => a)(SubmitButton)