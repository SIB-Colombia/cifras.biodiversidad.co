import React, { Fragment, Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Navbar from "../components/navbar";
import Home from "./home";
import Highlights from "./highlights";
import Groups from "./groups";
import Geo from "./geo";
import Companies from "./companies";
import NotFound from "./not-found";
import { connect } from 'react-redux'

class App extends Component {
    render () {
        return (
            <Fragment>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/destacados" component={Highlights}/>
                    <Route exact path="/grupos" component={Groups}/>
                    <Route exact path="/municipios" component={Geo}/>
                    <Route exact path="/entidades" component={Companies}/>
                    <Redirect from="/g" to="/grupos"/>
                    <Route component={NotFound}/>
                </Switch>
            </Fragment>

        )
    }
}



export default App
