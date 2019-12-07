// import
import React from 'react'
// Components
import DashboardGraphs from './DashboardGraphs'
import DashboardMain from './DashboardMain'
import DashboardValue from './DashboardValue'
import DashboardNews from './DashboardNews'



// Component
class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard-container">
                <DashboardGraphs />
                <DashboardMain />
                <DashboardValue />
                <DashboardNews />
            </div>
        )
    }
}



// Export
export default Dashboard