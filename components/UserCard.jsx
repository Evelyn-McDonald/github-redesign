const React         = require('react')
const connect       = require('react-redux').connect
const Component     = React.Component
const PropTypes     = React.PropTypes

class UserCard extends Component {
    // Initialize
    constructor(props) {
        super(props)

        this.handleSelectedUser = this.handleSelectedUser.bind(this)
    }
   
    static propTypes = {
        user: PropTypes.object,
        onSelect: PropTypes.func
    }

    // Event Handlers
    handleSelectedUser(username) {
        if(this.props.onSelect)
            this.props.onSelect(username)
    }

    // Render
    render() {
        return (
            <div className="UserCard">
                <li className="UserCard-wrapper"
                    onClick={this.handleSelectedUser.bind(null, this.props.user.login)}>
                    <div className="UserCard-user-avatar" style={{ backgroundImage: `url(${this.props.user.avatar_url})`}}></div>
                    <span className="UserCard-user-name">{this.props.user.name}</span>
                    <span className="UserCard-user-login">/{this.props.user.login}</span>
                    <div className="UserCard-user-stat">
                        <span className="UserCard-user-stat-title">Repos</span>
                        <span className="UserCard-user-stat-value">{this.props.user.public_repos}</span>
                    </div>
                    <div className="UserCard-user-stat">
                        <span className="UserCard-user-stat-title">Following</span>
                        <span className="UserCard-user-stat-value">{this.props.user.following}</span>
                    </div>
                    <div className="UserCard-user-stat">
                        <span className="UserCard-user-stat-title">Followers</span>
                        <span className="UserCard-user-stat-value">{this.props.user.followers}</span>
                    </div>
                </li>
            </div>
        )
    }
}

module.exports = UserCard