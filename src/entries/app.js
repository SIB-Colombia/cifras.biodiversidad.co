import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from "../pages/app";
import data from '../content'

const initialState = {
    data: {
        ...data,
    },
}


const homeContainer = document.getElementById('app')

render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    , homeContainer )

