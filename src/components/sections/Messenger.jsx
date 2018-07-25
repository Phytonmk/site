import React from 'react';
import { connect } from 'react-redux'

import { store, setMsgStatus } from '../../redux-store.js';

import SubmitButton from './SubmitButton.jsx'

class Messenger extends React.Component {
  constructor (props) {
    super(props);
    this.handleTyping = this.handleTyping.bind(this);
    this.state = {username: '', usertext: ''};
    const macrosUrl = 'https://script.google.com/macros/s/AKfycbzLDy5pQBSTSeEe83h1H8pMbojeqiz2_EFSB8Tx84JmSQjqYzTO/exec';
    store.subscribe(() => {
      if (store.getState().msgStatus === 'sending') {
        const xhr = new XMLHttpRequest();
        const url = `https://script.google.com/macros/s/AKfycbzLDy5pQBSTSeEe83h1H8pMbojeqiz2_EFSB8Tx84JmSQjqYzTO/exec?username=${encodeURIComponent(this.state.username)}&usertext=${encodeURIComponent(this.state.usertext)}`
        xhr.open('GET', url, true);
        xhr.send();
        xhr.onreadystatechange = function() {
          if (xhr.readyState != 4) return;
          setMsgStatus('delivered');
          if (xhr.status != 200) {
            setMsgStatus('error');
          }
        }
      }
    });
  }
  handleTyping (event) {
    this.setState({[event.target.name]: event.target.value});
    if (this.state.usertext && this.state.username && this.props.msgStatus === 'empty')
      setMsgStatus('typing');
    else if ((this.state.usertext === '' || this.state.username === '') && this.props.msgStatus === 'typing')
      setMsgStatus('empty');
  }
  render() {
    return (
      <section id="messenger-section">
        <div>
          <input
           onChange={this.handleTyping}
           onBlur={this.handleTyping}
           name="username"
           placeholder="Answer to (e.g. email, skype, tg)"
           className={this.props.msgStatus === 'delivered' ? 'invisible' : ''}
           value = {this.state.username}
          />
          <textarea
           onChange={this.handleTyping}
           onBlur={this.handleTyping}
           name="usertext"
           placeholder="Your message"
           className={this.props.msgStatus === 'delivered' ? 'invisible' : ''}
           value={this.state.usertext}
          ></textarea>
          <SubmitButton />
        </div>
      </section>
    );
  }
}





export default connect(a => a)(Messenger);