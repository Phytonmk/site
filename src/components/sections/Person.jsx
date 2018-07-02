import React from 'react';

import { scrollHandler } from '../../scrollHandler.js';

import Pic from './Pic.jsx';
class Person extends React.Component {
  constructor (props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleButtonClick (event) {
    scrollHandler(document.querySelector('#messenger-section'));
  }
  render() {
    return (
      <section id="person-section">
        <div className="pics-container">
          <Pic
           id="pic-2016"
           rotate="5deg"
           img="me/2016.png"
           preview="./me/2016-compressed.png"
           alt="Mikhail Kryuchkov, fullstack js developer in 2016"
           caption="How I looked like in 2016"
          />
          <Pic
           id="pic-2017"
           rotate="-5deg"
           img="me/2017.png"
           preview="./me/2017-compressed.png"
           alt="Mikhail Kryuchkov, fullstack js developer"
           caption="And how in 2017"
          />
        </div>
        <div className="contacts-container">
          <div>
            <h3>Contacts</h3>
            <a href="mailto:user@example.com" className="contact">user@example.com</a>
            <a href="https://t.me/phytonmk" className="contact">t.me/phytonmk</a>
          </div>
          <div>
            <div className="msg-btn-container" onClick={this.handleButtonClick}>
              <div className="msg-btn-text">
                Write me a message
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Person;