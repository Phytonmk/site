import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/app.jsx';
const appCode = ReactDOMServer.renderToString(<App />);

const fs = require('fs');
let code = fs.readFileSync(__dirname + '/../dist/index.html', 'utf-8');
if (code.indexOf('<div id="root"></div>') !== -1)
  code = code.replace('<div id="root"></div>', `<div id="root">${appCode}</div>`);
fs.writeFile(__dirname + '/../dist/index.html', code, (err) => {err ? console.log(err) : console.log('Success')});