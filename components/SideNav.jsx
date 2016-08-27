const React 		= require('react')
const Component     = React.Component
const PropTypes     = React.PropTypes
const classNames    = require('classnames')

class SideNav extends Component {
    // Initialize
    constructor(props) {
        super(props)

        this.changeFilter = this.changeFilter.bind(this)

        this.state = {
            filter: 'POPULAR'
        }
    }

    // Event Handlers
    changeFilter(filter) {
        this.setState({
            filter: filter
        })
    }

    // Render
    render() {
        let options = [
            { name: 'SEARCH', icon: 'search'},
            { name: 'POPULAR', icon: 'star_rate'},
            { name: 'TRENDING', icon: 'trending_up'},
            { name: 'NEW', icon: 'star_rate'}
        ]

        let filters = options.map((o, i) => {
            let isActive = (this.state.filter == o.name) ? 'active' : ''
            return (
            <li key={i} className={classNames('SideNav-filter', isActive)} onClick={this.changeFilter.bind(null, o.name)}>
                <i className="material-icons">{o.icon}</i>
                {o.name}
            </li>)
        })

        return (
            <div className="SideNav">
                <span className="SideNav-title">Query Users</span>
                <ul className="SideNav-filters">
                    {filters}
                </ul>
            </div>
        )
    }
}

module.exports = SideNav