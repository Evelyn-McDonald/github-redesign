const React         = require('react')
const connect       = require('react-redux').connect
const Component     = React.Component
const PropTypes     = React.PropTypes

// COMPONENTS
const UserCard      = require('../components/UserCard')

// ACTIONS
const setSearchTerm = require('../modules/Users/actions/setSearchTerm')
const setFilterBy   = require('../modules/Users/actions/setFilterBy')
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
    constructor(props) {
        super(props)

        this.handleSelectedUser = this.handleSelectedUser.bind(this)
    }
    
    static propTypes = {
        //users: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.dispatch(getUsers())
    }

    // Event Handlers
    handleSelectedUser(username) {
        this.props.dispatch(setSearchTerm(username))
        this.props.dispatch(setFilterBy('USER'))
        this.props.dispatch(getUsers())
    }

    // Render
    render() {
        let searchMessage = 'Lorem Ipsum'
        let userlist = <p className="UserList-placeholder">Donec sit amet ullamcorper velit, a pellentesque arcu</p>

        if (this.props.total >= 0) {
            if (this.props.filterBy == 'SEARCH' && typeof this.props.searchTerm !== 'undefined') {
                searchMessage = this.props.total + ' results for \'' + this.props.searchTerm + '\''
                userlist = (
                    this.props.users.map((u, i) => 
                        <li key={i} 
                            className="UserList-user"
                            onClick={this.handleSelectedUser.bind(null, u.login)}>
                            <div className="UserList-user-avatar" style={{ backgroundImage: `url(${u.avatar_url})`}}></div>
                            <span className="UserList-user-name">{u.login}</span>
                        </li>
                    )
                )
            }
            else if (this.props.filterBy != 'SEARCH') {
                searchMessage = 'Showing top ' + this.props.total + ' users'
                userlist = (
                    this.props.users.map((u, i) => 
                        <UserCard key={i} 
                                  user={u}
                                  onSelect={this.handleSelectedUser}/>
                    )
                )
            }
        }

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