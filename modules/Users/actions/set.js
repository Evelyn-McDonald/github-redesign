const constants = require('../constants')

module.exports = function(users) {
    return {
        type: constants.SET,
        users: users
    }
}
