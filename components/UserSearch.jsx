const React 		= require('react')
const connect       = require('react-redux').connect

const Component     = React.Component
const PropTypes     = React.PropTypes

// ACTIONS
const setSearchTerm   = require('../modules/Users/actions/setSearchTerm')
const setFilterBy   = require('../modules/Users/actions/setFilterBy')
const getUsers      = require('../modules/Users/actions/get')

class UserSearch extends Component {
    // Initialize
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // Event Handlers
    handleSubmit(e) {
        e.preventDefault()
        this.props.dispatch(setSearchTerm(e.target.childNodes[0].value))
        this.props.dispatch(setFilterBy('SEARCH'))
        this.props.dispatch(getUsers())
    }

    // Render
    render() {
        return (
            <div className="UserSearch">
                <form className="UserSearch-form"
                            onSubmit={this.handleSubmit}>
                    <input className="UserSearch-input"
                            name="UserSearch-input"
                            type="text"
                            placeholder="Search GitHub users" />
                </form>
            </div>
        )
    }
}

module.exports = connect()(UserSearch)