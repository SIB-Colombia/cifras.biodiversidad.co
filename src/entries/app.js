import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from "../components/navbar";
import Home from "../pages/home";
import Highlights from "../pages/highlights";
import Groups from "../pages/groups";
import Geo from "../pages/geo";
import Companies from "../pages/companies";

const homeContainer = document.getElementById('app')
render(
    <BrowserRouter>
        <Fragment>
            <Navbar/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/destacados" component={Highlights}/>
            <Route exact path="/grupos" component={Groups}/>
            <Route exact path="/municipios" component={Geo}/>
            <Route exact path="/entidades" component={Companies}/>
        </Fragment>
    </BrowserRouter>
    , homeContainer )

