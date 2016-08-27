const config    = require('../../../config.js')

// ACTIONS
const usersSet  = require('./set')

module.exports = function(id) {
    return function(dispatch, getState) {
        const state = getState()
        const filterBy = state.users.filterBy
        const searchTerm = state.users.searchTerm

        let data

        switch(filterBy) {
            case 'SEARCH':
                fetch(config.api + '/search/users?q=' + searchTerm)
                .then(function(response) {
                    return response.json();
                }).then(function(data) {
                    dispatch(usersSet(data.items.length, data.items))
                }).catch(function(err) {
                    console.log(err);
                });
                break

            case 'POPULAR':
                fetch(config.api + '/users?page=3&per_page=2')
                .then(function(response) {
                    return response.json();
                }).then(function(data) {
                    dispatch(usersSet(data.length, data))
                }).catch(function(err) {
                    console.log(err);
                });
                break

            case 'TRENDING':
                fetch(config.api + '/users?page=3&per_page=2')
                .then(function(response) {
                    return response.json();
                }).then(function(data) {
                    dispatch(usersSet(data.length, data))
                }).catch(function(err) {
                    console.log(err);
                });
                break
        }
    }
}
