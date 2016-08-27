require('babel-register')

const React             = require('react')
const ReactDOM          = require('react-dom')

const Redux             = require('redux')
const createStore       = Redux.createStore
const compose           = Redux.compose
const combineReducers   = Redux.combineReducers
const thunk             = require('redux-thunk').default
const devTools          = require('remote-redux-devtools')
const applyMiddleware   = Redux.applyMiddleware

const ReactRedux        = require('react-redux')
const Provider          = ReactRedux.Provider
const reducers          = require('./modules/reducers')

const App               = require('./components/App')

var devtools = null
if (window.devToolsExtension != 'undefined' && location.host.indexOf('localhost') !== -1) {
    devtools = window.devToolsExtension()
} else {
    devtools = (f) => f
}

const finalCreateStore = compose(
    applyMiddleware(thunk),
    devtools
)(createStore)

const store = finalCreateStore(combineReducers({
    ...reducers
}))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
  document.getElementById('app-content')
)