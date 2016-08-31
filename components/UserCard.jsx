const React         = require('react')
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
                    <div className="UserCard-avatar" style={{ backgroundImage: `url(${this.props.user.avatar_url})`}}></div>
                    <span className="UserCard-name">{this.props.user.name}</span>
                    <span className="UserCard-login">/{this.props.user.login}</span>
                    <div className="UserCard-stat">
                        <span className="UserCard-stat-title">Repos</span>
                        <span className="UserCard-stat-value">{this.props.user.public_repos}</span>
                    </div>
                    <div className="UserCard-stat">
                        <span className="UserCard-stat-title">Followers</span>
                        <span className="UserCard-stat-value">{this.props.user.followers}</span>
                    </div>
                    <div className="UserCard-stat">
                        <span className="UserCard-stat-title">Following</span>
                        <span className="UserCard-stat-value">{this.props.user.following}</span>
                    </div>
                </li>
            </div>
        )
    }
}

module.exports = UserCard