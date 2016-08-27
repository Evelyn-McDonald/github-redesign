const React         = require('react')
const Component     = React.Component
const PropTypes     = React.PropTypes

// Components
const Header        = require('../components/Header')
const SideNav       = require('../components/SideNav')
const UserList      = require('../components/UserList')

class App extends Component {

    // Render
    render() {
        let content = <UserList/>; 

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

module.exports = App