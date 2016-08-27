const config    = require('../../../config.js')

// ACTIONS
const usersSet  = require('./set')

module.exports = function(id) {
    return function(dispatch, getState) {
        
        // $.get(config.api + '/user/repos?page=3&per_page=100', function(res) {
        //     console.log('users', res)
        //     // dispatch(usersSet('test'))
        // });

        fetch(config.api + '/users?page=3&per_page=100', {
            method: 'get'
        }).then(function(res) {
            console.log('users', res)
        }).catch(function(err) {
            // Error :(
        });

        // config.api
        // .then(function(res) {
        //     dispatch(usersSet(res.data))
        // }).catch(function(e) {
        //     // console.log(e)
        // })
    }
}
