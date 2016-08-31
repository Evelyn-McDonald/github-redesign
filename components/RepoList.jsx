const React         = require('react')
const Component     = React.Component
const PropTypes     = React.PropTypes

class RepoList extends Component {
    // Initialize
    constructor(props) {
        super(props)
    }

    static propTypes = {
        repos: PropTypes.array
    }

    // Render
    render() {
        let repos = (
            this.props.repos.map((r, i) => 
                <a href={r.html_url} key={i}>
                    <li className="RepoList-item">
                        <div className="RepoList-item-title">{r.name}</div>
                        <div className="RepoList-item-language">{r.language}</div>
                        <div className="RepoList-item-commit">Fixed a random thing on a random page</div>
                        <div className="RepoList-stat">
                            <span className="RepoList-stat-title"><i className="material-icons">share</i></span>
                            <span className="RepoList-stat-value">{r.forks_count}</span>
                        </div>
                        <div className="RepoList-stat">
                            <span className="RepoList-stat-title"><i className="material-icons">star</i></span>
                            <span className="RepoList-stat-value">{r.stargazers_count}</span>
                        </div>
                        <div className="RepoList-stat">
                            <span className="RepoList-stat-title"><i className="material-icons">remove_red_eye</i></span>
                            <span className="RepoList-stat-value">{r.watchers}</span>
                        </div>
                    </li>
                </a>
            )
        )

        return (
            <div className="RepoList">
                <span className="RepoList-title">Repositories</span>
                <ul className="RepoList-list">
                    {repos}
                </ul>
            </div>
        )
    }
}

module.exports = RepoList