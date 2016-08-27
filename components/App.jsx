const React 		= require('react')
const Component     = React.Component
const PropTypes     = React.PropTypes

// Components
const Header		= require('../components/Header')

class App extends Component {

	// Render
    render() {
        let content = <li>Test</li>; 

        return ( 
        	<div className="App">
	        	<Header/>
	        	{ content }
		    </div>
	    )
    }
}

module.exports = App