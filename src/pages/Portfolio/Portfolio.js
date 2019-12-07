// Import
import React from 'react'
// Components
import SideBar from '../../components/Sidebar'
import Dashboard from '../../components/Dashboard'



// Component
class Portfolio extends React.Component {
    render () {
        return (
            <div className="portfolio-container">
                <SideBar active="/" />
                <Dashboard />
            </div>
        )
    }
}



// Export
export default Portfolio