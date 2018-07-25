// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({5:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = exports.setScrollReactions = exports.setMsgStatus = exports.openPic = exports.setScreen = undefined;

var _redux = require('redux');

const setScreen = screen => store.dispatch({
  type: 'CHANGE_SCREEN',
  screen
});
const setMsgStatus = status => store.dispatch({
  type: 'CHANGE_MSG_STATUS',
  status
});
const openPic = imageID => store.dispatch({
  type: 'OPEN_IMAGE',
  image: imageID
});
const setScrollReactions = enabled => store.dispatch({
  type: 'CHANGE_SCROLL_REACTIONS',
  scrollReactions: enabled
});

const reducer = (state = { screen: -1, openedImage: '', msgStatus: 'empty', scrollReactions: true }, action) => {
  switch (action.type) {
    case 'CHANGE_SCREEN':
      return { screen: action.screen, openedImage: state.openedImage, msgStatus: state.msgStatus, scrollReactions: state.scrollReactions };
    case 'OPEN_IMAGE':
      return { screen: state.screen, openedImage: action.image, msgStatus: state.msgStatus, scrollReactions: state.scrollReactions };
    case 'CHANGE_MSG_STATUS':
      return { screen: state.screen, openedImage: state.openedImage, msgStatus: action.status, scrollReactions: state.scrollReactions };
    case 'CHANGE_SCROLL_REACTIONS':
      return { screen: state.screen, openedImage: state.openedImage, msgStatus: state.msgStatus, scrollReactions: action.scrollReactions };
  }
  return state;
};

const store = (0, _redux.createStore)(reducer);

exports.setScreen = setScreen;
exports.openPic = openPic;
exports.setMsgStatus = setMsgStatus;
exports.setScrollReactions = setScrollReactions;
exports.store = store;
},{}],15:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Name extends _react2.default.Component {
  render() {
    let age = 18;
    const computed = (new Date().getTime() - new Date('05/29/2000').getTime()) / (60 * 60 * 24 * 365 * 1000);
    if (computed > age) age = Math.floor(computed);
    return _react2.default.createElement(
      'section',
      { id: 'name-section' },
      _react2.default.createElement(
        'h1',
        null,
        'Mikhail Kryuchkov'
      ),
      _react2.default.createElement(
        'h2',
        null,
        'fullstack JS developer',
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'span',
          { className: 'sub-text' },
          age,
          ' y.o. Saint-Petersburg, Russia'
        )
      )
    );
  }
}
exports.default = Name;
},{}],27:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class StackBlock extends _react2.default.Component {
  render() {
    const technologiesList = this.props.technologies.map((technology, i) => _react2.default.createElement(
      "li",
      { key: i },
      technology
    ));
    return _react2.default.createElement(
      "div",
      { className: "stack-block" },
      _react2.default.createElement(
        "h3",
        null,
        this.props.title
      ),
      _react2.default.createElement(
        "ul",
        null,
        technologiesList
      )
    );
  }
}
exports.default = StackBlock;
},{}],16:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StackBlock = require('./StackBlock.jsx');

var _StackBlock2 = _interopRequireDefault(_StackBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const stack = [{
  title: 'UI',
  technologies: ['SASS', 'Pug (Jade)']
}, {
  title: 'Frontend',
  technologies: ['React', 'Redux']
}, {
  title: 'Backend',
  technologies: ['NodeJS', 'Go']
}];
const additionalStack = ['Familiar with both SQL and NoSQL databases (mostly MySQL and Mongo)', 'Also have basic knowledge of C++ and Python'];

class Stack extends _react2.default.Component {
  render() {
    const stackBlocks = stack.map((stackData, i) => _react2.default.createElement(_StackBlock2.default, { key: i, title: stackData.title, technologies: stackData.technologies }));
    const stackStrings = additionalStack.map((stackData, i) => _react2.default.createElement(
      'div',
      { className: 'stack-string', key: i },
      stackData
    ));
    return _react2.default.createElement(
      'section',
      { id: 'stack-section' },
      _react2.default.createElement(
        'h2',
        null,
        'Current Stack'
      ),
      _react2.default.createElement(
        'div',
        { className: 'stack-container' },
        stackBlocks
      ),
      stackStrings
    );
  }
}
exports.default = Stack;
},{"./StackBlock.jsx":27}],26:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Project extends _react2.default.Component {
  render() {
    return _react2.default.createElement(
      "a",
      { href: this.props.url, className: "project-row" },
      _react2.default.createElement("span", {
        className: "project-icon",
        style: { backgroundPosition: `0px -${this.props.backroundYPosition}px` }
      }),
      _react2.default.createElement(
        "span",
        { className: "project-title" },
        this.props.children
      )
    );
  }
}
exports.default = Project;
},{}],17:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Project = require('./Project.jsx');

var _Project2 = _interopRequireDefault(_Project);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const projects = [{
  spriteYCoords: 73 * 0,
  title: 'Rubbish bin of Hackatons\' and other projects',
  url: 'https://github.com/phytonmk'
}, {
  spriteYCoords: 73 * 1,
  title: 'This site sourse code',
  url: 'https://github.com/phytonmk/site'
}, {
  spriteYCoords: 73 * 2,
  title: 'Some fullstack JS project (will be published soon)',
  url: '#'
}, {
  spriteYCoords: 73 * 3,
  title: 'Some Golang project (will be published soon)',
  url: '#'
}, {
  spriteYCoords: 73 * 4,
  title: 'Some React Native project (will be published soon)',
  url: '#'
}];

class Projects extends _react2.default.Component {
  render() {
    const projectsList = projects.map((project, i) => _react2.default.createElement(
      _Project2.default,
      { key: i, backroundYPosition: project.spriteYCoords, url: project.url },
      project.title
    ));
    return _react2.default.createElement(
      'section',
      { id: 'projects-section' },
      _react2.default.createElement(
        'h2',
        null,
        '{How am I programming}'
      ),
      _react2.default.createElement(
        'div',
        { className: 'project-container' },
        projectsList
      )
    );
  }
}
exports.default = Projects;
},{"./Project.jsx":26}],13:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EPPZScrollTo = undefined;

var _reduxStore = require('./redux-store.js');

const EPPZScrollTo = {
    /**
     * Helpers.
     */
    documentVerticalScrollPosition: function documentVerticalScrollPosition() {
        if (self.pageYOffset) return self.pageYOffset; // Firefox, Chrome, Opera, Safari.
        if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop; // Internet Explorer 6 (standards mode).
        if (document.body.scrollTop) return document.body.scrollTop; // Internet Explorer 6, 7 and 8.
        return 0; // None of the above.
    },

    viewportHeight: function viewportHeight() {
        return document.compatMode === "CSS1Compat" ? document.documentElement.clientHeight : document.body.clientHeight;
    },

    documentHeight: function documentHeight() {
        return document.height !== undefined ? document.height : document.body.scrollHeight;
    },

    documentMaximumScrollPosition: function documentMaximumScrollPosition() {
        return this.documentHeight() - this.viewportHeight();
    },

    elementVerticalClientPositionById: function elementVerticalClientPositionById(id) {
        const element = document.getElementById(id);
        const rectangle = element.getBoundingClientRect();
        return rectangle.top;
    },

    /**
     * Animation tick.
     */
    scrollVerticalTickToPosition: function scrollVerticalTickToPosition(currentPosition, targetPosition) {
        const filter = 0.2;
        const fps = 60;
        const difference = parseFloat(targetPosition) - parseFloat(currentPosition);

        // Snap, then stop if arrived.
        const arrived = Math.abs(difference) <= 0.5;
        if (arrived) {
            // Apply target.
            scrollTo(0.0, targetPosition);
            (0, _reduxStore.setScrollReactions)(true);
            return;
        }

        // Filtered position.
        currentPosition = parseFloat(currentPosition) * (1.0 - filter) + parseFloat(targetPosition) * filter;

        // Apply target.
        scrollTo(0.0, Math.round(currentPosition));

        // Schedule next tick.
        setTimeout(() => this.scrollVerticalTickToPosition(currentPosition, targetPosition), 1000 / fps);
    },

    /**
     * For public use.
     *
     * @param id The id of the element to scroll to.
     * @param padding Top padding to apply above element.
     */
    scrollVerticalToElementById: function scrollVerticalToElementById(id, padding) {
        (0, _reduxStore.setScrollReactions)(false);
        var element = document.getElementById(id);
        if (element == null) {
            console.warn('Cannot find element with id \'' + id + '\'.');
            return;
        }

        var targetPosition = this.documentVerticalScrollPosition() + this.elementVerticalClientPositionById(id) - padding;
        var currentPosition = this.documentVerticalScrollPosition();

        // Clamp.
        var maximumScrollPosition = this.documentMaximumScrollPosition();
        if (targetPosition > maximumScrollPosition) targetPosition = maximumScrollPosition;

        // Start animation.
        this.scrollVerticalTickToPosition(currentPosition, targetPosition);
    }
}; /**
   *
   * Created by Borbás Geri on 12/17/13
   * Copyright (c) 2013 eppz! development, LLC.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
   * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   *
   */


let scrollingNow = false;

exports.EPPZScrollTo = EPPZScrollTo;
},{"./redux-store.js":5}],6:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollHandler = undefined;

var _reduxStore = require('./redux-store.js');

var _eppzscrollto = require('./eppzscrollto.js');

const scrollKeyPossitions = [[{
  maxHeight: 285,
  offset: -437
}, {
  maxHeight: 378,
  offset: -361
}, {
  maxHeight: 462,
  offset: -322
}, {
  maxHeight: 595,
  offset: -252
}, {
  maxHeight: 728,
  offset: -189
}, {
  maxHeight: 855,
  offset: -102
}, {
  maxHeight: 900,
  offset: -46
}, {
  maxHeight: 'infinite',
  offset: 0
}], [{
  maxHeight: 840,
  offset: 38
}, {
  maxHeight: 'infinite',
  offset: 160
}], [{
  maxHeight: 600,
  offset: -197
}, {
  maxHeight: 660,
  offset: -152
}, {
  maxHeight: 730,
  offset: -122
}, {
  maxHeight: 850,
  offset: -91
}, {
  maxHeight: 960,
  offset: 0
}, {
  maxHeight: 'infinite',
  offset: 77
}], [{
  maxHeight: 670,
  offset: -441
}, {
  maxHeight: 765,
  offset: -396
}, {
  maxHeight: 950,
  offset: -324
}, {
  maxHeight: 'infinite',
  offset: -230
}], [{
  maxHeight: 'infinite',
  offset: 0
}]];

const getScrollOffset = screen => {
  let offset = scrollKeyPossitions[screen][0].offset || 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = scrollKeyPossitions[screen][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      let offsets = _step.value;

      if (offsets.maxHeight !== 'infinite' && offsets.maxHeight > document.body.clientHeight) {
        offset = offsets.offset;
        break;
      } else {
        offset = offsets.offset;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return offset;
};

const scrollHandler = currentSection => {
  let forcedSection = false;
  if (!currentSection) {
    const scrollTop = window.pageYOffset;
    const sections = document.querySelectorAll('section');
    if (sections.length === 0) return;
    currentSection = sections[0];
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = sections[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        let section = _step2.value;

        if (scrollTop + document.body.offsetHeight * 3 / 4 > section.offsetTop) {
          currentSection = section;
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  } else {
    forcedSection = true;
  }
  const lastScreen = _reduxStore.store.getState().screen;
  let offset = 0;
  switch (currentSection.id) {
    case 'name-section':
      (0, _reduxStore.setScreen)(0);
      offset = getScrollOffset(0);
      break;
    case 'stack-section':
      (0, _reduxStore.setScreen)(1);
      offset = getScrollOffset(1);
      break;
    case 'projects-section':
      (0, _reduxStore.setScreen)(2);
      offset = getScrollOffset(2);
      break;
    case 'person-section':
      (0, _reduxStore.setScreen)(3);
      offset = getScrollOffset(3);
      break;
    case 'messenger-section':
      (0, _reduxStore.setScreen)(4);
      offset = getScrollOffset(4);
      break;
  }
  if (document.body.offsetWidth > 960 && lastScreen !== _reduxStore.store.getState().screen && currentSection.id && _reduxStore.store.getState().scrollReactions) {
    // console.log('scroll to #' + currentSection.id + ' with offset ' + offset);
    _eppzscrollto.EPPZScrollTo.scrollVerticalToElementById(currentSection.id, offset);
  } else if (forcedSection) {
    window.scrollTo(0, document.getElementById(currentSection.id).offsetTop);
  }
};
if (typeof window !== 'undefined') setTimeout(() => scrollHandler(document.querySelector('#name-section')), 0);
exports.scrollHandler = scrollHandler;
},{"./redux-store.js":5,"./eppzscrollto.js":13}],25:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reduxStore = require('../../redux-store.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Pic extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
    this.state = { transform: '' };
  }
  toggleFullscreen(event) {
    this.setState({ transform: movePicToCenter(event.target.parentNode) });
    if (_reduxStore.store.getState().openedImage === event.target.parentNode.id) {
      (0, _reduxStore.openPic)('');
    } else {
      (0, _reduxStore.openPic)(event.target.parentNode.id);
    }
  }
  render() {
    const fullscreen = this.props.id === _reduxStore.store.getState().openedImage;
    return _react2.default.createElement(
      'figure',
      {
        className: fullscreen ? 'pic-container pic-fullscreen' : 'pic-container',
        id: this.props.id,
        style: fullscreen ? { transform: this.state.transform } : {}
      },
      _react2.default.createElement('img', {
        src: this.props.img,
        alt: this.props.alt,
        onClick: this.toggleFullscreen,
        style: {
          transform: this.props.rotate && !fullscreen ? `rotate(${this.props.rotate})` : '',
          backgroundImage: this.props.preview ? `url(${this.props.preview})` : ''
        } }),
      _react2.default.createElement(
        'figcaption',
        null,
        this.props.caption
      )
    );
  }
}

const movePicToCenter = picContainer => {
  const moveY = document.body.clientHeight / 2 + window.pageYOffset - (picContainer.offsetTop + picContainer.offsetParent.offsetTop + picContainer.offsetHeight / 2);
  const moveX = document.body.clientWidth / 2 + window.pageXOffset - (picContainer.offsetLeft + picContainer.offsetParent.offsetLeft + picContainer.offsetWidth / 2);
  return `translate(${Math.round(moveX)}px, ${Math.round(moveY)}px)`;
};

exports.default = (0, _reactRedux.connect)(a => a)(Pic);
},{"../../redux-store.js":5}],18:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _scrollHandler = require('../../scrollHandler.js');

var _Pic = require('./Pic.jsx');

var _Pic2 = _interopRequireDefault(_Pic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Person extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleButtonClick(event) {
    (0, _scrollHandler.scrollHandler)(document.querySelector('#messenger-section'));
  }
  render() {
    return _react2.default.createElement(
      'section',
      { id: 'person-section' },
      _react2.default.createElement(
        'div',
        { className: 'pics-container' },
        _react2.default.createElement(_Pic2.default, {
          id: 'pic-2016',
          rotate: '5deg',
          img: 'me/2016.png',
          preview: './me/2016-compressed.png',
          alt: 'Mikhail Kryuchkov, fullstack js developer in 2016',
          caption: 'How I looked like in 2016'
        }),
        _react2.default.createElement(_Pic2.default, {
          id: 'pic-2017',
          rotate: '-5deg',
          img: 'me/2017.png',
          preview: './me/2017-compressed.png',
          alt: 'Mikhail Kryuchkov, fullstack js developer',
          caption: 'And how in 2017'
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'contacts-container' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h3',
            null,
            'Contacts'
          ),
          _react2.default.createElement(
            'a',
            { href: 'mailto:user@example.com', className: 'contact' },
            'user@example.com'
          ),
          _react2.default.createElement(
            'a',
            { href: 'https://t.me/phytonmk', className: 'contact' },
            't.me/phytonmk'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'msg-btn-container', onClick: this.handleButtonClick },
            _react2.default.createElement(
              'div',
              { className: 'msg-btn-text' },
              'Write me a message'
            )
          )
        )
      )
    );
  }
}
exports.default = Person;
},{"../../scrollHandler.js":6,"./Pic.jsx":25}],31:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reduxStore = require('../../redux-store.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SubmitButton extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    event.preventDefault();
    if (this.props.msgStatus === 'typing') {
      (0, _reduxStore.setMsgStatus)('sending');
    }
  }
  render() {
    let className = '';
    if (this.props.msgStatus === 'empty') className = 'invisible';else if (this.props.msgStatus === 'sending') className = 'processing';else if (this.props.msgStatus === 'delivered') className = 'completed';else if (this.props.msgStatus === 'error') className = 'completed';
    let text = 'Transfer';
    if (this.props.msgStatus === 'sending') text = 'Transfering...';else if (this.props.msgStatus === 'delivered') text = 'Transfered';else if (this.props.msgStatus === 'error') text = 'Error Ocured';
    return _react2.default.createElement(
      'button',
      { onClick: this.handleClick, type: 'submit', className: className },
      text
    );
  }
}
exports.default = (0, _reactRedux.connect)(a => a)(SubmitButton);
},{"../../redux-store.js":5}],19:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reduxStore = require('../../redux-store.js');

var _SubmitButton = require('./SubmitButton.jsx');

var _SubmitButton2 = _interopRequireDefault(_SubmitButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import axios from 'axios';

class Messenger extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.handleTyping = this.handleTyping.bind(this);
    this.state = { username: '', usertext: '' };
    const macrosUrl = 'https://script.google.com/macros/s/AKfycbzLDy5pQBSTSeEe83h1H8pMbojeqiz2_EFSB8Tx84JmSQjqYzTO/exec';
    _reduxStore.store.subscribe(() => {
      // console.log({username: this.state.username, usertext: this.state.usertext});
      if (_reduxStore.store.getState().msgStatus === 'sending') {
        const xhr = new XMLHttpRequest();
        const url = `https://script.google.com/macros/s/AKfycbzLDy5pQBSTSeEe83h1H8pMbojeqiz2_EFSB8Tx84JmSQjqYzTO/exec?username=${encodeURIComponent(this.state.username)}&usertext=${encodeURIComponent(this.state.usertext)}`;
        xhr.open('GET', url, true);
        xhr.send();
        xhr.onreadystatechange = function () {
          if (xhr.readyState != 4) return;
          (0, _reduxStore.setMsgStatus)('delivered');
          if (xhr.status != 200) {
            (0, _reduxStore.setMsgStatus)('error');
          }
        };
      }
    });
  }
  handleTyping(event) {
    this.setState({ [event.target.name]: event.target.value });
    if (this.state.usertext && this.state.username && this.props.msgStatus === 'empty') (0, _reduxStore.setMsgStatus)('typing');else if ((this.state.usertext === '' || this.state.username === '') && this.props.msgStatus === 'typing') (0, _reduxStore.setMsgStatus)('empty');
  }
  render() {
    return _react2.default.createElement(
      'section',
      { id: 'messenger-section' },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', {
          onChange: this.handleTyping,
          onBlur: this.handleTyping,
          name: 'username',
          placeholder: 'Answer to (e.g. email, skype, tg)',
          className: this.props.msgStatus === 'delivered' ? 'invisible' : '',
          value: this.state.username
        }),
        _react2.default.createElement('textarea', {
          onChange: this.handleTyping,
          onBlur: this.handleTyping,
          name: 'usertext',
          placeholder: 'Your message',
          className: this.props.msgStatus === 'delivered' ? 'invisible' : '',
          value: this.state.usertext
        }),
        _react2.default.createElement(_SubmitButton2.default, null)
      )
    );
  }
}

exports.default = (0, _reactRedux.connect)(a => a)(Messenger);
},{"../../redux-store.js":5,"./SubmitButton.jsx":31}],7:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Name = require('./sections/Name.jsx');

var _Name2 = _interopRequireDefault(_Name);

var _Stack = require('./sections/Stack.jsx');

var _Stack2 = _interopRequireDefault(_Stack);

var _Projects = require('./sections/Projects.jsx');

var _Projects2 = _interopRequireDefault(_Projects);

var _Person = require('./sections/Person.jsx');

var _Person2 = _interopRequireDefault(_Person);

var _Messenger = require('./sections/Messenger.jsx');

var _Messenger2 = _interopRequireDefault(_Messenger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Sections extends _react2.default.Component {
  render() {
    return _react2.default.createElement(
      'main',
      null,
      _react2.default.createElement(_Name2.default, null),
      _react2.default.createElement(_Stack2.default, null),
      _react2.default.createElement(_Projects2.default, null),
      _react2.default.createElement(_Person2.default, null),
      _react2.default.createElement(_Messenger2.default, null)
    );
  }
}
exports.default = Sections;
},{"./sections/Name.jsx":15,"./sections/Stack.jsx":16,"./sections/Projects.jsx":17,"./sections/Person.jsx":18,"./sections/Messenger.jsx":19}],8:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Background extends _react2.default.Component {
  render() {
    return _react2.default.createElement(
      'div',
      { className: 'background-container' },
      _react2.default.createElement('div', { className: 'background-image background-preview' }),
      _react2.default.createElement('div', { className: 'background-image' }),
      _react2.default.createElement('div', { className: 'background-image blur-8', style: { opacity: this.props.screen === 4 ? 1 : 0 } }),
      _react2.default.createElement('div', { className: 'background-image blur-6', style: { opacity: this.props.screen === 3 ? 1 : 0 } }),
      _react2.default.createElement('div', { className: 'background-image blur-4', style: { opacity: this.props.screen === 2 ? 1 : 0 } }),
      _react2.default.createElement('div', { className: 'background-image blur-2', style: { opacity: this.props.screen === 1 ? 1 : 0 } }),
      _react2.default.createElement('div', { className: `dark-shape form-${this.props.screen}` })
    );
  }
}

exports.default = (0, _reactRedux.connect)(a => a)(Background);
},{}],3:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reduxStore = require('./redux-store.js');

var _Sections = require('./components/Sections.jsx');

var _Sections2 = _interopRequireDefault(_Sections);

var _Background = require('./components/Background.jsx');

var _Background2 = _interopRequireDefault(_Background);

var _scrollHandler = require('./scrollHandler.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(event) {
    (0, _scrollHandler.scrollHandler)();
  }
  render() {
    return _react2.default.createElement(
      _reactRedux.Provider,
      { store: _reduxStore.store },
      _react2.default.createElement(
        'div',
        { id: 'provider-wrapper' },
        _react2.default.createElement(_Background2.default, null),
        _react2.default.createElement(_Sections2.default, null)
      )
    );
  }
}

exports.default = App;
},{"./redux-store.js":5,"./components/Sections.jsx":7,"./components/Background.jsx":8,"./scrollHandler.js":6}],1:[function(require,module,exports) {
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _app = require('../src/app.jsx');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const appCode = _server2.default.renderToString(_react2.default.createElement(_app2.default, null));

const fs = require('fs');
let code = fs.readFileSync(__dirname + '/../dist/index.html', 'utf-8');
if (code.indexOf('<div id="root"></div>') !== -1) code = code.replace('<div id="root"></div>', `<div id="root">${appCode}</div>`);
fs.writeFile(__dirname + '/../dist/index.html', code, err => {
  err ? console.log(err) : console.log('Success');
});
},{"../src/app.jsx":3}]},{},[1], null)
//# sourceMappingURL=/dist.map