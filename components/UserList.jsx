const React         = require('react')
const connect       = require('react-redux').connect
const Component     = React.Component
const PropTypes     = React.PropTypes
const ReactCSSTransitionGroup = require('react-addons-css-transition-group')

// COMPONENTS
const Loader        = require('../components/Loader')
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
        let searchMessage = ''
        let userlist = <Loader/>

        if (this.props.total >= 0) {
            if (this.props.filterBy != 'SEARCH' || (this.props.filterBy == 'SEARCH' && typeof this.props.searchTerm !== 'undefined')) {
                searchMessage = 'Showing top ' + this.props.total + ' users'
                userlist = (
                    this.props.users.map((u, i) => 
                        <UserCard key={i} 
                                  user={u}
                                  onSelect={this.handleSelectedUser}/>
                    )
                )
            }
            else {
                searchMessage = 'Lorem Ipsum'
                userlist = <p className="UserList-placeholder">Donec sit amet ullamcorper velit, a pellentesque arcu</p>
            }
        }

        return (
            <div className="UserList">
                <span>{searchMessage}</span>
                <ul className="UserList-wrapper">
                    <ReactCSSTransitionGroup transitionName="fadeIn" transitionEnterTimeout={400} transitionLeaveTimeout={400} >
                        {userlist}
                    </ReactCSSTransitionGroup>
                </ul>
            </div>
        )
    }
}

module.exports = connect(mapStateToProps)(UserList)