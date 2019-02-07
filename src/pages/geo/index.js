import React, {Component, Fragment} from 'react'
import {GEO} from "../../actions/services/queries";
import {Query} from "react-apollo";
import LoadingTemplate from "../templates/loading";
import {bindActionCreators} from "redux";
import * as actions from "../../actions";
import connect from "react-redux/es/connect/connect";
import Sidebar from "../../components/sidebar";
import queryString from "query-string";
import GeoContainer from "./container";

class Geo extends Component {
    componentDidMount () {
        this.setActiveGroup()
        this.props.actions.buttonSidebarVisibility(true)
    }

    componentDidUpdate () {
        this.setActiveGroup()
    }

    render () {
        return (
            <Query query={GEO}>
                {
                    ({ loading, error, data }) => {
                        if ( loading ) return <LoadingTemplate/>
                        if ( error ) console.log(error)

                        this.saveDataToState(data)
                        return (
                            <Fragment>
                                {
                                    this.props.sidebarVisible &&
                                        <Sidebar title="Municipios"/>
                                }
                                <GeoContainer
                                    sidebar={this.props.sidebarVisible}
                                    page='geo'
                                    title='Municipios de Santander'
                                    dataVisualization={true}
                                />
                            </Fragment>
                        )
                    }
                }
            </Query>
        )
    }

    setActiveGroup () {
        let urlValue = this.props.location.search.length === 0 ? {id: '0', name: 'General'} : queryString.parse(this.props.location.search)
        this.props.actions.filterTown(urlValue)
    }

    saveDataToState (data) {
        let groupsList = []
        data.vistaMunicipios.forEach(item => {
            groupsList.push({id: item.geografia.id, nombre: item.geografia.nombre})
        })
        this.props.actions.fetchGeneralDataCountry(data.vistaGeneralColombia)
        this.props.actions.fetchGeneralDataDepartment(data.vistaGeneralDepartamento)
        this.props.actions.fetchTownsData(data.vistaMunicipios)

        this.props.actions.sidebarItems(groupsList)

    }
}

const mapStateToProps = ( state ) => {
    return (
        {
            sidebarVisible: state.getIn(['interaction', 'sidebar', 'active']),
        }
    )
}

const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Geo)

