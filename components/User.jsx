const React 		= require('react')
const connect       = require('react-redux').connect
const Component     = React.Component
const PropTypes     = React.PropTypes

class User extends Component {
    // Initialize
    constructor(props) {
        super(props)
    }

    // Event Handlers

    // Render
    render() {
        return (
            <div className="User">
                <h1>Single user details</h1>
            </div>
        )
    }
}

module.exports = User