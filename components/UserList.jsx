const React         = require('react')
const connect       = require('react-redux').connect
const Component     = React.Component
const PropTypes     = React.PropTypes

// ACTIONS
const getUsers      = require('../modules/Users/actions/get')

const mapStateToProps = function(state, ownProps) {
    return {
        filterBy: state.users.filterBy,
        searchTerm: state.users.searchTerm,
        total: state.users.total,
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
        let searchMessage = 'Showing top ' + this.props.total + ' users'
        if (this.props.filterBy == 'SEARCH')
            searchMessage = this.props.total + ' results for \'' + this.props.searchTerm + '\''

        let userlist = (
            this.props.users.map((u, i) => 
                <li key={i} className="UserList-user">
                    <div className="UserList-user-avatar" style={{ backgroundImage: `url(${u.avatar_url})`}}></div>
                    <span className="UserList-user-name">{u.login}</span>
                </li>
            )
        )

        let filterTotal

        return (
            <div className="UserList">
                <span>{searchMessage}</span>
                <ul className="UserList-wrapper">
                    {userlist}
                </ul>
            </div>
        )
    }
}

module.exports = connect(mapStateToProps)(UserList)