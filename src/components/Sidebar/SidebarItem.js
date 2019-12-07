// Imports
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Link
import { Link } from 'react-router-dom'



// Component
const SidebarItem = (props) => {
    return (
        <Link to={props.link} className={"sidebar__item-container " + (props.active ? "active" : "")}>
            <FontAwesomeIcon icon={props.icon} />
            <p>{props.text}</p>
        </Link>
    )
}



// Export
export default SidebarItem