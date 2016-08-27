const constants = require('./constants')

const initialState = {
    users: []
};

module.exports = function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case constants.SET:
            return {
                ...state,
                users: action.users
            }

        default:
            return state
        }
}
