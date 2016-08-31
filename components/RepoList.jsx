const React         = require('react')
const Component     = React.Component

class RepoList extends Component {
    // Initialize
    constructor(props) {
        super(props)
    }

    // Render
    render() {
        return (
            <div className="RepoList">
                <span className="RepoList-title">Repositories</span>
                <ul className="RepoList-list">
                    <li className="RepoList-item">
                        <div className="RepoList-item-title">random-react-app</div>
                        <div className="RepoList-item-language">react</div>
                        <div className="RepoList-item-commit">Fixed a random thing on a random page</div>
                        <div className="RepoList-stat">
                            <span className="RepoList-stat-title"><i className="material-icons">share</i></span>
                            <span className="RepoList-stat-value">60</span>
                        </div>
                        <div className="RepoList-stat">
                            <span className="RepoList-stat-title"><i className="material-icons">star</i></span>
                            <span className="RepoList-stat-value">19617</span>
                        </div>
                        <div className="RepoList-stat">
                            <span className="RepoList-stat-title"><i className="material-icons">remove_red_eye</i></span>
                            <span className="RepoList-stat-value">11</span>
                        </div>
                    </li>
                    <li className="RepoList-item">
                        <div className="RepoList-item-title">random-react-app</div>
                        <div className="RepoList-item-language">react</div>
                        <div className="RepoList-item-commit">Fixed a random thing on a random page</div>
                        <div className="RepoList-stat">
                            <span className="RepoList-stat-title"><i className="material-icons">share</i></span>
                            <span className="RepoList-stat-value">60</span>
                        </div>
                        <div className="RepoList-stat">
                            <span className="RepoList-stat-title"><i className="material-icons">star</i></span>
                            <span className="RepoList-stat-value">19617</span>
                        </div>
                        <div className="RepoList-stat">
                            <span className="RepoList-stat-title"><i className="material-icons">remove_red_eye</i></span>
                            <span className="RepoList-stat-value">11</span>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

module.exports = RepoList