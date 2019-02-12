import React, {Fragment} from 'react'
import {hydrate, render} from 'react-dom'
import Router from "../pages/router";
import ApolloClient from "apollo-client";
import {createHttpLink} from "apollo-link-http";
import fetch from "node-fetch";
import {InMemoryCache} from "apollo-cache-inmemory";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "../actions/reducers";
import {Map as map} from "immutable";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import Provider from "react-redux/es/components/Provider";
import {ApolloProvider} from "react-apollo";
const homeContainer = document.getElementById('app')

const preloadedState = window.__PRELOADED_STATE__


const client = new ApolloClient({
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
    link: createHttpLink({
        uri: 'http://158.69.59.122:8001/graphql',
        fetch: fetch,
    }),
})

const store = createStore(
    rootReducer,
    preloadedState,
    map(),
    composeWithDevTools(
        applyMiddleware(
            thunk
        )
    )
)

hydrate(
    <Provider store={store}>
        <Router />
    </Provider>
    , homeContainer )

