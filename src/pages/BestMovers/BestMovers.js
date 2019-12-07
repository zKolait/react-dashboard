// import
import React from 'react'
// Components
import SideBar from '../../components/Sidebar'



// Component
class BestMovers extends React.Component {
    render() {
        return (
            <div className="best__movers-container">
                <SideBar active="/best-movers" />
            </div>
        )
    }
}



// Export
export default BestMovers