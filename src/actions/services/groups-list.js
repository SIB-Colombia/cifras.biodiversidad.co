import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { connect } from 'react-redux'
import {bindActionCreators} from "redux";
import * as actions from "../index";
import { GROUPS_LIST } from "./queries";


class GroupsList extends Component {
    render () {
        return (
            <div>
                <Query query={GROUPS_LIST}>
                    {
                        ({ loading, error, data }) => {
                            if(loading) return <h4>cargando...</h4>
                            if(error) console.log(error)
                            console.log(data)
                            return <h1>Datos Cargados</h1>
                        }
                    }
                </Query>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
)

export default connect(null, mapDispatchToProps)(GroupsList)