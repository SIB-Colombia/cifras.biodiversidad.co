import Express from 'express';

import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router';

import ApolloClient from 'apollo-client';
import { ApolloProvider, renderToStringWithData } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { createPersistedQueryLink } from 'apollo-link-persisted-queries';
import {HttpLink} from "apollo-link-http";
import Root from "./pages/root";
import Html from "./pages/Html";



const app = new Express();




app.use((req, res) => {
    const client = new ApolloClient({
        ssrMode: true,
        link: new HttpLink({ uri: 'http://158.69.59.122:8001/graphql' }),
        cache: new InMemoryCache(),
    });

    const context = {};

    const component = (
        <ApolloProvider client={client}>
                <Root />
        </ApolloProvider>
    );

    renderToStringWithData(component)
        .then(content => {
            res.status(200);
            const html = <Html content={content} client={client} />;
            res.send(`<!doctype html>\n${ReactDOM.renderToStaticMarkup(html)}`);
            res.end();
        })
        .catch(e => {
            console.error('RENDERING ERROR:', e); // eslint-disable-line no-console
            res.status(500);
            res.end(
                `An error occurred. Please submit an issue to [https://github.com/apollographql/GitHunt-React] with the following stack trace:\n\n${
                    e.stack
                    }`
            );
        });
});

app.listen(3000, () =>
    console.log(
        // eslint-disable-line no-console
        `App Server is now running on http://localhost:${PORT}`
    )
);