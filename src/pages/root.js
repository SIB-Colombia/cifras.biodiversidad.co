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
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from "apollo-cache-inmemory";
import logger from "redux-logger"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { Map as map } from 'immutable'
const cache = new InMemoryCache({
    dataIdFromObject: object => object.key || null

});


const client = new ApolloClient({
    uri: 'http://192.168.11.92:8001/graphql',
    //uri: 'http://a7f41629.ngrok.io/graphql',
    cache

})

const store = createStore(
    reducer,
    map(),
    composeWithDevTools(
        applyMiddleware(
            //logger,
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
