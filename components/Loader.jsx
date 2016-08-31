const React         = require('react')
const Component     = React.Component

class Loader extends Component {
    // Initialize
    constructor(props) {
        super(props)
    }

    // Render
    render() {
        return (
            <div className="Loader">
                <div className="spinner">
                    <div className="dot dot1"></div>
                    <div className="dot dot2"></div>
                </div>
            </div>
        )
    }
}

module.exports = Loader