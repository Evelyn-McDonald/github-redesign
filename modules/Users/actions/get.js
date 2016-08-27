const config	= require('../../../config.js')

// ACTIONS
const usersSet  = require('./set')

module.exports = function(id) {
    return function(dispatch, getState) {
		console.log('success', 'config.api');
    	
    	$.get(config.api, function(res) {
			usersSet(res.data);
		});

        // config.api
        // .then(function(res) {
        //     dispatch(usersSet(res.data))
        // }).catch(function(e) {
        //     // console.log(e)
        // })
    }
}
