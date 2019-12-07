// Imports






// Default State
const coinsDefaultState = {
    portfolio: [],
    currency: 'EUR',
    search: ''
}






// Reducer
export default (state = coinsDefaultState, action) => {
    switch(action.type) {
        // Add a coin to portfolio
        case "ADD_COIN":
            return {
                ...state,
                portfolio: state.portfolio.concat(action.coin)
            }
        // Remove a coin from portfolio
        case "REMOVE_COIN":
            return {
                ...state,
                portfolio: state.portfolio.filter((coin) => coin !== action.coin)
            }
        // Set currency of dashboard
        case "SET_CURRENCY":
            return {
                ...state,
                currency: action.currency
            }
        // Set search term
        case "SET_SEARCH":
            return {
                ...state,
                search: action.search
            }
        // Return state
        default:
            return state
    }
}