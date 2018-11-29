import React, { Fragment, Component, PropTypes } from 'react'
import Home from "./home";
import Navbar from "../components/navbar";
import Highlights from "./highlights";
import Groups from "./groups";
import Geo from "./geo";
import Companies from "./companies";
import Footer from "../components/footer/index";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { createStore } from "redux";
import { Provider } from 'react-redux'

import NotFound from "./not-found";
import reducer from "../services/reducers/reducer.js";

import content from "../content";
import groups from "../data";

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import GroupsList from "../services/groups-list";
import GroupsLayout from "./groups/layout";

const client = new ApolloClient({
    uri: 'https://cors-anywhere.herokuapp.com/https://ec2-34-207-172-223.compute-1.amazonaws.com:8080/graphql'
})


const initialState = {
    data: {
        ...content,
        ...groups
    },
    sidebar: true,
    buttonSidebar: false,
}

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class Root extends Component {
    render () {
        return (
            <ApolloProvider client={client}>
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
                                <Route component={NotFound}/>
                            </Switch>
                            <Footer/>
                        </Fragment>
                    </BrowserRouter>
                </Provider>
            </ApolloProvider>

        )
    }
}

export default Root
