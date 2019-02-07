import Express from 'express';
import React from 'react'
import { StaticRouter } from 'react-router'
import reactDOMServer from 'react-dom/server'
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from 'apollo-link-http';
import App from '../dist/ssr/app'

const app = Express();

app.use(Express.static('dist'))

const client = new ApolloClient({
    ssrMode: true,
    link: new HttpLink({ uri: 'http://158.69.59.122:8001/graphql' }),
    cache: new InMemoryCache(),
});

app.get('*', (req, res) => {
    const html = reactDOMServer.renderToString(
        <ApolloProvider client={client}>
            <StaticRouter
                location={req.url}
                context={{
                    logged: true
                }}
            >
                <App />
            </StaticRouter>
        </ApolloProvider>
    )
    res.write(`
        <!doctype html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport"
                  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Ventana Regional</title>
            <link rel="stylesheet" href="./css/app.css">
        </head>
        <body>
            <div id="app">${html}</div>
        </body>
       
        </html>
    `)
    res.end()
})

app.listen(3000)
console.log('Running in port 3000')
