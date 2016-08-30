const React         = require('react')
const connect       = require('react-redux').connect
const Component     = React.Component
const PropTypes     = React.PropTypes

// Components
const Header        = require('../components/Header')
const SideNav       = require('../components/SideNav')
const User          = require('../components/User')
const UserList      = require('../components/UserList')

const mapStateToProps = function(state, ownProps) {
    return {
        total: state.users.total
    }
}

class App extends Component {

    // Render
    render() {
        let content = (this.props.total == 1) ? <User/> : <UserList/>; 

        return ( 
            <div className="App">
                <Header/>
                <SideNav/>
                <div className="App-container">
                    { content }
                </div>
            </div>
        )
    }
}

module.exports = connect(mapStateToProps)(App)