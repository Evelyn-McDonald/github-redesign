const React 		= require('react')
const Component     = React.Component
const PropTypes     = React.PropTypes

// Components
const Header		= require('../components/Header')

class App extends Component {

	// Render
    render() {
        let itemHtml = <li>Hello people</li>; 
        return ( 
        	<div className="App">
	        	<Header />
	        	<div>
		            <ul>
		                { itemHtml }
		            </ul>
		         </div>
		    </div>
	    )
    }
}

module.exports = App