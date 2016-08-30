const config    = require('../../../config.js')
const _         = require('underscore')

// ACTIONS
const usersSet  = require('./set')

module.exports = function(id) {
    return function(dispatch, getState) {
        const state = getState()
        const filterBy = state.users.filterBy
        const searchTerm = state.users.searchTerm

        let data
        let users
        let d = new Date()
        d.setDate(d.getDate() - 4)

        switch(filterBy) {
            case 'SEARCH':
                fetch(config.api + '/search/users?q=' + searchTerm)
                .then(function(response) {
                    return response.json()
                }).then(function(data) {
                    users = data.items.map((o, i) => {
                        return fetch(config.api + '/users/' + o.login)
                        .then(function(response2) {
                            return response2.json()
                        }).then(function(data2) {
                            return data2;
                        }).catch(function(err) {
                            console.log(err)
                        });
                    })
                }).then(function() {
                    dispatch(usersSet(users.length, users))

                // }).then(function(data) {
                //     dispatch(usersSet(data.items.length, data.items))
                }).catch(function(err) {
                    console.log(err)
                });
                break

            case 'POPULAR':
                fetch(config.api + '/search/users?q=followers:>=3000&per_page=4')
                .then(function(response) {
                    return response.json()
                }).then(function(data) {
                    users = data.items.map((o, i) => {
                        return fetch(config.api + '/users/' + o.login)
                        .then(function(response2) {
                            return response2.json()
                        }).then(function(data2) {
                            return data2;
                        }).catch(function(err) {
                            console.log(err)
                        });
                    })
                }).then(function() {
                    dispatch(usersSet(users.length, users))
                }).catch(function(err) {
                    console.log(err)
                });
                break

            case 'TRENDING':
                fetch(config.api + '/search/repositories?q=created:>='+d.toISOString().slice(0,10)+'&sort=stars&order=desc&per_page=4')
                .then(function(response) {
                    return response.json()
                }).then(function(data) {
                    users = data.items.map((o, i) => {
                        return fetch(config.api + '/users/' + o.login)
                        .then(function(response2) {
                            return response2.json()
                        }).then(function(data2) {
                            return data2;
                        }).catch(function(err) {
                            console.log(err)
                        });
                    })
                }).then(function() {
                    dispatch(usersSet(users.length, users))


                // })
                // .then(function(data) {
                //     dispatch(usersSet(data.items.length, data.items))
                }).catch(function(err) {
                    console.log(err)
                });
                break

            case 'NEW':
                fetch(config.api + '/search/users?q=created:>='+d.toISOString().slice(0,10)+'&per_page=4')
                .then(function(response) {
                    return response.json()
                }).then(function(data) {
                    users = data.items.map((o, i) => {
                        return fetch(config.api + '/users/' + o.login)
                        .then(function(response2) {
                            return response2.json()
                        }).then(function(data2) {
                            return data2;
                        }).catch(function(err) {
                            console.log(err)
                        });
                    })
                }).then(function() {
                    dispatch(usersSet(users.length, users))


                // }).then(function(data) {
                //     dispatch(usersSet(data.items.length, data.items))
                }).catch(function(err) {
                    console.log(err)
                });
                break
        }
    }
}
