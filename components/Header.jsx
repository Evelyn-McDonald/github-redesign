const React 		= require('react')
const Component     = React.Component
const PropTypes     = React.PropTypes

class Header extends Component {
    // Initialize
    constructor(props) {
        super(props)
    }

    // Event Handlers

    // Render
    render() {
        return (
            <div className="Header">
                <h1>test</h1>
            </div>
        )
    }
}

module.exports = Header