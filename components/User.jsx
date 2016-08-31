const React 		= require('react')
const connect       = require('react-redux').connect
const Component     = React.Component
const PropTypes     = React.PropTypes

// COMPONENTS
const RepoList      = require('../components/RepoList')

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
        let data = this.props.users[0]

        let user = (
            <div className="User-wrapper">
                <div className="User-avatar" style={{ backgroundImage: `url(${data.avatar_url})`}}></div>
                <div className="User-details">
                    <h1 className="User-name">{data.name}</h1>
                    <a href="https://github.com/Evelyn-McDonald">
                        <i className="material-icons">launch</i>
                        <h2 className="User-login">{data.login}</h2>
                    </a>
                    <h2 className="User-joined-date">Joined on {data.created_at.substring(0,10)}</h2>
                    <div className="User-stat">
                        <span className="User-stat-title">Repos</span>
                        <span className="User-stat-value">{data.public_repos}</span>
                    </div>
                    <div className="User-stat">
                        <span className="User-stat-title">Followers</span>
                        <span className="User-stat-value">{data.followers}</span>
                    </div>
                    <div className="User-stat">
                        <span className="User-stat-title">Following</span>
                        <span className="User-stat-value">{data.following}</span>
                    </div>
                </div>

                <RepoList repos={data.repos}/>
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