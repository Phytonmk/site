import React from 'react';
import { connect } from 'react-redux'
import axios from 'axios';

import { store, setMsgStatus } from '../../redux-store.js';

import SubmitButton from './SubmitButton.jsx'


class Messenger extends React.Component {
  constructor (props) {
    super(props);
    this.handleTyping = this.handleTyping.bind(this);
    this.state = {username: '', usertext: ''};
    const macrosUrl = 'https://script.googleusercontent.com/macros/echo?' + 
      'user_content_key=xvA-TtKs6NbSNujGyPrIvwbPhWd7_sCk1OGnRTkZy5HXmashy' + 
      'iiBXZXkHYEJbN1IykMG36BkkbtObTAM9qo-8o0ljXZw1TY_m5_BxDlH2jW0nuo2oDe' +
      'mN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLG30VBsWsP24Ts_1y3eRJFUDm6qLS4P8On' + 
      'WNY8igKJOXZVrA765_5P_7kK4Fz4tHtP_ArQgNVAy&lib=M5Z5ZMDmJkri_1JvPh4t7vmCmJYRmcQB5';
    store.subscribe(() => {
      if (store.getState().msgStatus === 'sending') {
        axios.post(macrosUrl, {username: this.state.username, usertext: this.state.usertext}, {
          proxy: {
            host: 'sr123.spry.fail',
            port: 1080,
            auth: {
              username: 'telegram',
              password: 'telegram'
            }
          },
        }).then(() => {
          setMsgStatus('delivered');
        }).catch(() => {
          setMsgStatus('error');
        });
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