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

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import {concat} from 'apollo-link';
import {HttpLink} from 'apollo-link-http';
import {RetryLink} from 'apollo-link-retry';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';

const retry = new RetryLink({ attempts : { max : Infinity } })
const http = new HttpLink({ uri : 'http://158.69.59.122:8001/graphql' })
const link = concat(retry, http)
const cache = new InMemoryCache()

const storage = window.localStorage
const waitOnCache = persistCache({ cache, storage })

const client = new ApolloClient({
    //cache,
    uri : 'http://158.69.59.122:8001/graphql'
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
                                <Route exact path="/sobre-el-portal" component={About}/>
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
