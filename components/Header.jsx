const React 		= require('react')
const Component     = React.Component
const PropTypes     = React.PropTypes

// Components
const UserSearch    = require('../components/UserSearch')


class Header extends Component {
    // Initialize
    constructor(props) {
        super(props)
    }

    // Render
    render() {
        return (
            <div className="Header">
                <div className="Header-container">
                    <span className="Header-github-logo"></span>
                    <UserSearch />
                </div>
            </div>
        )
    }
}

module.exports = Header