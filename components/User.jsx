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
        let user = (
            <div className="User-wrapper">
                <div className="User-avatar" style={{ backgroundImage: `url("https://avatars.githubusercontent.com/u/1?v=3")`}}></div>
                <div className="User-details">
                    <h1 className="User-name">Tom Preston-Werner</h1>
                    <a href="https://github.com/Evelyn-McDonald">
                        <i className="material-icons">launch</i>
                        <h2 className="User-login">mojombo</h2>
                    </a>
                    <h2 className="User-joined-date">Joined on Oct 14, 2011</h2>
                    <div className="User-stat">
                        <span className="User-stat-title">Repos</span>
                        <span className="User-stat-value">60</span>
                    </div>
                    <div className="User-stat">
                        <span className="User-stat-title">Followers</span>
                        <span className="User-stat-value">19617</span>
                    </div>
                    <div className="User-stat">
                        <span className="User-stat-title">Following</span>
                        <span className="User-stat-value">11</span>
                    </div>
                </div>

                <RepoList/>
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