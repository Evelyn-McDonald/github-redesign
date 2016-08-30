const config    = require('../../../config.js')

// ACTIONS
const usersSet  = require('./set')

module.exports = function(id) {
    return function(dispatch, getState) {
        const state = getState()
        const filterBy = state.users.filterBy
        const searchTerm = state.users.searchTerm

        let data
        let d = new Date()
        d.setDate(d.getDate() - 4)

        switch(filterBy) {
            case 'SEARCH':
                fetch(config.api + '/search/users?q=' + searchTerm)
                .then(function(response) {
                    return response.json()
                }).then(function(data) {
                    dispatch(usersSet(data.items.length, data.items))
                }).catch(function(err) {
                    console.log(err)
                });
                break

            case 'POPULAR':
                fetch(config.api + '/search/users?q=followers:>=3000&per_page=4')
                .then(function(response) {
                    return response.json()
                }).then(function(data) {
                    dispatch(usersSet(data.items.length, data.items))
                }).catch(function(err) {
                    console.log(err)
                });
                break

            case 'TRENDING':
                fetch(config.api + '/search/repositories?q=created:>='+d.toISOString().slice(0,10)+'&sort=stars&order=desc&per_page=4')
                .then(function(response) {
                    return response.json()
                })

                .then(function(data) {
                    dispatch(usersSet(data.items.length, data.items))
                }).catch(function(err) {
                    console.log(err)
                });
                break

            case 'NEW':
                fetch(config.api + '/search/users?q=created:>='+d.toISOString().slice(0,10)+'&per_page=4')
                .then(function(response) {
                    return response.json()
                }).then(function(data) {
                    dispatch(usersSet(data.items.length, data.items))
                }).catch(function(err) {
                    console.log(err)
                });
                break
        }
    }
}
