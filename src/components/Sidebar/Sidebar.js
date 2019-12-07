// Imports
import React, { useState } from 'react'
// Components
import SidebarItem from './SidebarItem'
// Utils
import {generateSidebarItems} from '../../utils/sidebarItems'



// Component
function Sidebar(props) {
    // Hooks
    //
    // SidebarItems hook
    const generatedSidebarItems = generateSidebarItems(props.active)
    const [sidebarItems] = useState(generatedSidebarItems)



    // Render
    return (
        <div className="sidebar-container">
            <nav>
                {
                    sidebarItems.map((item) => {
                        return <SidebarItem {...item} key={item.link} />
                    })
                }
            </nav>
        </div>
    )
}



// Export
export default Sidebar