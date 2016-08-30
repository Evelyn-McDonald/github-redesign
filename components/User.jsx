const React 		= require('react')
const connect       = require('react-redux').connect
const Component     = React.Component
const PropTypes     = React.PropTypes

const mapStateToProps = function(state, ownProps) {
    return {
        users: state.users.users
    }
}

class User extends Component {
    // Initialize
    constructor(props) {
        super(props)
    }

    // Event Handlers

    // Render
    render() {
        let user = (
            <div className="User-wrapper">
                <div className="User-avatar" style={{ backgroundImage: `url()`}}></div>
                <h1 className="User-name">name: Evelyn McDonald</h1>
                <h2 className="User-username">login: evelyn-mcdonald</h2>
                <span className="User-followers">1234</span>
            </div>
        )

        return (
            <div className="User">
                {user}
            </div>
        )
    }
}

module.exports = connect(mapStateToProps)(User)