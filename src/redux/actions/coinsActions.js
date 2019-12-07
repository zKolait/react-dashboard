// Imports




// Actions
// ->
// Add a coin to portfolio
export default addCoin = (coin) => (
    {
        type: "ADD_COIN",
        coin
    }
)

// Remove a coin from portfolio
export default removeCoin = (coin) => (
    {
        type: "REMOVE_COIN",
        coin
    }
)

// Set currency of dashboard
export default setCurrency = (currency) => (
    {
        type: "SET_CURRENCY",
        currency
    }
)

// Set search term
export default setSearch = (search) => (
    {
        type: "SET_SEARCH",
        search
    }
)