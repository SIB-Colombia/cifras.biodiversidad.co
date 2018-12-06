import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string'
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import SearchSidebarPage from "../templates/sidebarTemplate/index";
import {GROUPS_LIST} from "../../actions/services/queries";
import {Query} from "react-apollo";
import LoadingTemplate from '../templates/loading';

class Groups extends Component {
    static fetchGroupData (value )  {
       console.log( `Filtro URL: ${value}`)
    }

    componentDidMount () {
        const values = queryString.parse(this.props.location.search)
        Groups.fetchGroupData(values.grupo)
        this.props.actions.sidebarVisibility(true)
        this.props.actions.buttonSidebarVisibility(true)
    }

    render () {
        return (
                <Query query={GROUPS_LIST}>
                    {
                        ({ loading, error, data }) => {
                            if(loading) return <LoadingTemplate {...this.props}/>
                            if(error) console.log(error)

                            /*return (
                                <SearchSidebarPage
                                    {...this.props}
                                    title="Búsqueda por grupos biológicos"
                                />
                            )*/
                            return <LoadingTemplate {...this.props}/>
                        }
                    }
                </Query>
        )
    }
}

const mapStateToProps = ( state ) => (
    {
        groups: Object.values( state.data.groups ),
        sidebarVisible: state.interaction.sidebar
    }
)

const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Groups)