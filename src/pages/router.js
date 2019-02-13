import React, { Fragment, Component, PropTypes } from 'react'
import Home from './home';
import Navbar from '../components/navbar';
import Highlights from './highlights';
import Groups from './groups';
import Geo from './geo';
import Companies from './companies';
import About from "./about";
import Footer from '../components/footer/index';
import NotFound from './not-found';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom'

class Router extends Component {
    render () {
        return (
            <HashRouter basename="/">
                <Fragment>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/destacados" component={Highlights}/>
                        <Route exact path="/grupos" component={Groups}/>
                        <Route exact path="/municipios" component={Geo}/>
                        <Route exact path="/entidades" component={Companies}/>
                        <Route exact path="/sobre-el-portal" component={About}/>
                        <Route component={NotFound}/>
                    </Switch>
                    <Footer/>
                </Fragment>
            </HashRouter>
        )
    }
}

export default Router
