const React         = require('react')
const connect       = require('react-redux').connect
const Component     = React.Component
const PropTypes     = React.PropTypes

// ACTIONS
const getUsers      = require('../modules/Users/actions/get')

const mapStateToProps = function(state, ownProps) {
    return {
        users: state.users.users
    }
}

class UserList extends Component {
    // Initialize
    static propTypes = {
        //users: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatch(getUsers())
    }

    // Event Handlers

    // Render
    render() {
        return (
            <div className="UserList">
            </div>
        )
    }
}

module.exports = connect(mapStateToProps)(UserList)