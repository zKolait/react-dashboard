// Imports
import { faCoins, faArrowAltCircleDown, faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'



// Base state
let sidebarItems = [
    {
        icon: faCoins,
        text: 'Portfolio',
        link: '/',
        active: false
    },
    {
        icon: faArrowAltCircleUp,
        text: 'Best movers',
        link: '/best-movers',
        active: false
    },
    {
        icon: faArrowAltCircleDown,
        text: 'Worst movers',
        link: '/worst-movers',
        active: false
    }
]



// Sidebar generator function
export const generateSidebarItems = (active = '/') => {
    let generatedSidebarItems = sidebarItems.map((item) => {
        if (item.link === active) {
            return {
                ...item,
                active: true
            }
        } else {
            return {
                ...item
            }
        }
    })

    return generatedSidebarItems
}