// import
import React from 'react'
// Components
import SideBar from '../../components/Sidebar'



// Component
class WorstMovers extends React.Component {
    render() {
        return (
            <div className="worst__movers-container">
                <SideBar active="/worst-movers" />
            </div>
        )
    }
}



// Export
export default WorstMovers