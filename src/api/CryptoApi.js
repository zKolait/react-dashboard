// Imports
import cc from 'cryptocompare'



// Crypto API builder
class CryptoAPI {
    // Construct API crypto compare
    constructor () {
        cc.setApiKey(process.env.REACT_APP_CRYPTO_APP_KEY)
    }

    getCoinStats = (coin, currency) => {
        return cc.histoHour(coin, currency, {
            limit: 23,
        }).then((result) => result)
    }

    getCoinsStats = async (coins, currency) => {
        return Promise.all(coins.map(async (coin) => {
            return await this.getCoinStats(coin, currency)
        }))
    }
}



// Export
export default (new CryptoAPI())