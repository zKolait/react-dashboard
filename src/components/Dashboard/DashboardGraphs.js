// Imports
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
// Api
import CryptoAPI from '../../api/CryptoApi'
// Components
import DashboardGraphsAddCoin from './DashboardGraphsAddCoin'
import DashboardGraphsItem from './DashboardGraphsItem'
import DashboardGraphsSearchbar from './DashboardGraphsSearchbar'



// Component
function DashboardGraphs (props) {
    // Coins state hook
    const [coinsStats, setCoinsStats] = useState({})

    // Fetch coins stats function
    async function fetchCoins(coins, currency) {
        let res = await CryptoAPI.getCoinsStats(coins, currency)
        setCoinsStats(res)
    }

    // On coins useEffect hook
    useEffect(() => {
        fetchCoins(["BTC", "XRP"], "EUR")
    }, [])

    // Render
    return (
        <div className="dashboard-graphs-container">
            <DashboardGraphsSearchbar />
            <DashboardGraphsItem />
            <DashboardGraphsAddCoin />
        </div>
    )
}



// Export
export default connect()(DashboardGraphs)