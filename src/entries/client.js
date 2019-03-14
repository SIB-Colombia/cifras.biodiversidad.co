import React, {Fragment} from 'react'
import {hydrate, render} from 'react-dom'
import ApolloClient from "apollo-client";
import {createHttpLink} from "apollo-link-http";
import fetch from "node-fetch";
import {InMemoryCache} from "apollo-cache-inmemory";
import {applyMiddleware, createStore, compose} from "redux";
import rootReducer from "../actions/reducers";
import {Map as map} from "immutable";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import Provider from "react-redux/es/components/Provider";
import {ApolloProvider} from "react-apollo";
import Router from "../pages/router";
import {API_URL} from "../config";

const homeContainer = document.getElementById('app')

const preloadedState = window.__PRELOADED_STATE__


const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: createHttpLink({
        uri: API_URL,
        fetch: fetch,
    }),
})

const store = createStore(
    rootReducer,
    map(),
    composeWithDevTools(
        applyMiddleware(
            thunk
        )
    )
)

hydrate(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <Router />
        </Provider>
    </ApolloProvider>
    , homeContainer )

