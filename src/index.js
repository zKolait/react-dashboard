// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
// Styles and fonts
import './styles/styles.scss'
import './styles/fonts/Lato-Bold.ttf'
import './styles/fonts/Lato-Light.ttf'
import './styles/fonts/Lato-Regular.ttf'
// Store General
import configureStore from './redux/store/configureStore'
// Router import
import AppRouter, { history } from './routers/AppRouter'



// Main app component here
const store = configureStore()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('root'));




serviceWorker.unregister();
