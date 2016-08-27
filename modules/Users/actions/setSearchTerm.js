const constants = require('../constants')

module.exports = function(searchTerm) {
    return {
        type: constants.SET_SEARCH,
        searchTerm: searchTerm
    }
}
