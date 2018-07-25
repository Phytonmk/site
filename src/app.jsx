import React from 'react';
import { Provider } from 'react-redux';
import { store, setScreen } from './redux-store.js';

import Sections from './components/Sections.jsx';
import Background from './components/Background.jsx';

import { scrollHandler } from './scrollHandler.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll (event) {scrollHandler()}
  render() {
    return (
        <Provider store={store}>
          <div id="provider-wrapper">
             <Background />
             <Sections />
          </div>
        </Provider>
    );
  }
}

export default App;