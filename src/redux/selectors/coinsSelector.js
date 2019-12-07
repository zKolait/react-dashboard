// Imports




// Get all coins from search input
export const getAllSearchedCoins = (coins, search) => {
    return coins.map((coin) => coin.includes(search))
}
