const React 		= require('react')
const Component     = React.Component
const PropTypes     = React.PropTypes

class UserSearch extends Component {
    // Initialize
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // Event Handlers
    handleSubmit() {
        console.log('form submit')
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

module.exports = UserSearch