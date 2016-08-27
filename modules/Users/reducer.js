const constants = require('./constants')

const initialState = {
    users: [],
    filterBy: 'POPULAR'
};

module.exports = function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case constants.SET:
            return {
                ...state,
                total: action.total,
                users: action.users
            }

        case constants.SET_FILTER:
            return {
                ...state,
                filterBy: action.filterBy
            }

        case constants.SET_SEARCH:
            return {
                ...state,
                searchTerm: action.searchTerm
            }

        default:
            return state
        }
}
