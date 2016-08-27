const constants = require('../constants')

module.exports = function(filter) {
    return {
        type: constants.SET_FILTER,
        filterBy: filter
    }
}
