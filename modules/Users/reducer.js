const constants = require('./constants')

const initialState = {
};

module.exports = function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case constants.SET:
            return {
                ...state,
                current: action.users
            }

        default:
            return state
        }
}
