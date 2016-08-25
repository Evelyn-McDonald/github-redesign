require('babel-register')

const React 	= require('react')
const ReactDOM  = require('react-dom')
const App   	= require('./components/App')

// import ReactDOM from 'react-dom';
// import React from 'react';
// import AppRoot from './components/App'; // we'll create this next

ReactDOM.render(<App/>,
  document.getElementById('app-content')
)