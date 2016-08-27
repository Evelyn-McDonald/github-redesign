require('babel-register')

const Express   = require('express')
const React 	= require('react')
const ReactDOM  = require('react-dom')
const config    = require('./config')
const path      = require('path')
const App   	= require('./components/App')

var app = Express();
app.use(Express.static(path.join(__dirname, 'dist')));
app.listen(config.port ,function(){
    console.log("====> App is running on port", config.port);
})

// ReactDOM.render(<App/>,
//   document.getElementById('app-content')
// )