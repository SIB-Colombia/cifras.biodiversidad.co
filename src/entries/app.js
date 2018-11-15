import React from 'react'
import { render } from 'react-dom'
import Root from "../pages/root";
import content from '../content'
import {createStore} from "redux";
const homeContainer = document.getElementById('app')
import reducer from "../reducers/content"

const initialState = {
    data: {
        ...content,
    },
}

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(<Root store={store}/>, homeContainer )

