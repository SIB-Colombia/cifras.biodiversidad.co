import React from 'react'
import { render } from 'react-dom'
import Home from "../pages/home";
import { BrowserRouter } from 'react-router-dom'

const homeContainer = document.getElementById('app')
render(
    <BrowserRouter
        basename="/santander"
    >
        <Home/>
    </BrowserRouter>
    , homeContainer )