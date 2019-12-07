// Imports
import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
// Components
import Portfolio from '../pages/Portfolio'
import BestMovers from '../pages/BestMovers'
import WorstMovers from '../pages/WorstMovers'


// Create history
export const history = createBrowserHistory()

// AppRouter
const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={Portfolio} exact={true} />
            <Route path="/best-movers" component={BestMovers} />
            <Route path="/worst-movers" component={WorstMovers} />
        </Switch>
    </Router>
)


// Export
export default AppRouter