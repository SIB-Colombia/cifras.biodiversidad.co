import React, { Fragment, Component, PropTypes } from 'react'
import Home from './home';
import Navbar from '../components/navbar';
import Highlights from './highlights';
import Groups from './groups';
import Geo from './geo';
import Companies from './companies';
import Footer from '../components/footer/index';
import NotFound from './not-found';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import reducer from '../actions/reducers/index';
import logger from "redux-logger"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { Map as map } from 'immutable'
import About from "./about";
import 'cross-fetch/polyfill';
import fetch from 'node-fetch'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
    link: createHttpLink({
        uri: 'http://158.69.59.122:8001/graphql',
        fetch: fetch,
    }),
    cache: new InMemoryCache(),
})

const store = createStore(
    reducer,
    map(),
    composeWithDevTools(
        applyMiddleware(
            thunk
        )
    )
)

class Root extends Component {
    render () {
        return (

                <Provider store={store}>
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
                </Provider>
        )
    }
}

export default Root
