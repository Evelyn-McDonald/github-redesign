const constants = require('../constants')

module.exports = function(total, users) {
    return {
        type: constants.SET,
        total: total,
        users: users
    }
}
