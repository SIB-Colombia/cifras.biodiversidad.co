import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string'
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import SearchSidebarPage from "../templates/sidebarTemplate/index";
import {GROUPS} from "../../actions/services/queries";
import {Query} from "react-apollo";
import LoadingTemplate from '../templates/loading';

class Groups extends Component {


    render () {
        return (
            <Query query={GROUPS}>
                {
                    ({ loading, error, data }) => {
                        if(loading) return <LoadingTemplate {...this.props}/>
                        if(error) console.log(error)

                        return (
                            <SearchSidebarPage
                                data={data}
                                {...this.props}
                                title="Búsqueda por grupos biológicos"
                            />
                        )
                    }
                }
            </Query>
        )
    }
}

export default Groups