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
        let userlist = (
            this.props.users.map((u, i) => 
                <li key={i} className="UserList-user">
                    <div className="UserList-user-avatar" style={{ backgroundImage: `url(${u.avatar_url})`}}></div>
                    <span className="UserList-user-name">{u.login}</span>
                </li>
            )
        )

        return (
            <div className="UserList">
                <ul className="UserList-wrapper">
                    {userlist}
                </ul>
            </div>
        )
    }
}

module.exports = connect(mapStateToProps)(UserList)