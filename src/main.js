import Express from 'express';
import React from 'react'
import { StaticRouter } from 'react-router'
import reactDOMServer  from 'react-dom/server'
import fetch from 'node-fetch';

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from 'apollo-link-http';

import Provider from "react-redux/es/components/Provider";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./actions/reducers";
import {Map as map} from "immutable";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import App from '../dist/ssr/app'

const app = Express();

app.use(Express.static('dist'))



app.use(handleRender)

function handleRender(req, res) {
    const store = createStore(
        rootReducer,
        map(),
        composeWithDevTools(
            applyMiddleware(
                thunk
            )
        )
    )

    const client = new ApolloClient({
        ssrMode: true,
        link: new HttpLink({ uri: 'http://158.69.59.122:8001/graphql' , fetch: fetch}),
        cache: new InMemoryCache(),
    });

    const html = reactDOMServer.renderToString(
        <ApolloProvider client={client}>
            <Provider store={store}>
                <StaticRouter
                    location={req.url}
                    context={{
                        logged: true
                    }}
                >
                    <App />
                </StaticRouter>
            </Provider>
        </ApolloProvider>
    )

    const preloadedState = store.getState()

    res.send(renderFullPage(html, preloadedState, client))
}

function renderFullPage(html, preloadedState, client) {
    return `
        <!doctype html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport"
                  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Biodiversidad en cifras - Santander</title>
            <link rel="stylesheet" href="./css/app.css">
        </head>
        <body>
            <div id="app">${html}</div>
            <script>
                    // WARNING: See the following for security issues around embedding JSON in HTML:
                    // http://redux.js.org/recipes/ServerRendering.html#security-considerations
                    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
                        /</g,
                        '\\\u003c'
                    )}
                    window.__APOLLO_STATE__ = JSON.stringify(client.extract());
    
            </script>
            <script src="./ssr/app.js"></script>
        </body>
       
        </html>
    `
}


app.listen(3000)
console.log('Running in port 3000')
