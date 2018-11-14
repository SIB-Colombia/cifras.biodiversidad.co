import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from "../pages/app";
import content from '../content'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initialState = {
    data: {
        ...content,
    },
}

const store = createStore(
    (state) => state,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

console.log(store.getState())


const homeContainer = document.getElementById('app')


render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , homeContainer )

