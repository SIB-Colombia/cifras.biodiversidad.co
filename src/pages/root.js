import React, { Fragment, Component, PropTypes } from 'react'
import Home from "./home";
import Navbar from "../components/navbar";
import Highlights from "./highlights";
import Groups from "./groups";
import Geo from "./geo";
import Companies from "./companies";
import NotFound from "./not-found";
import Footer from "../components/footer/layout";
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import content from "../content";
import { createStore } from "redux";
import reducer from "../reducers/content";


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

class Root extends Component {
    render () {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Fragment>
                        <Navbar/>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/destacados" component={Highlights}/>
                            <Route exact path="/grupos" component={Groups}/>
                            <Route exact path="/municipios" component={Geo}/>
                            <Route exact path="/entidades" component={Companies}/>
                            <Redirect from="/g" to="/grupos"/>
                            <Route component={NotFound}/>
                        </Switch>
                        <Footer/>
                    </Fragment>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default Root
