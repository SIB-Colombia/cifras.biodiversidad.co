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
        this.props.actions.sidebarVisibility(true)
        this.props.actions.buttonSidebarVisibility(true)
        this.setActiveGroup()
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
                                        <Sidebar/>
                                }
                                <GeoContainer
                                    sidebar={this.props.sidebarVisible}
                                    page='geo'
                                    title='Búsqueda por municipios'
                                    dataVisualization={false}
                                />
                            </Fragment>
                        )
                    }
                }
            </Query>
        )
    }

    setActiveGroup () {
        let urlValue = this.props.location.search.length === 0 ? {id: '0'} : queryString.parse(this.props.location.search)
        this.props.actions.filterTown(urlValue)
    }

    saveDataToState (data) {
        let groupsList = []
        data.vistaMunicipios.forEach(item => {
            groupsList.push({id: item.id, nombre: item.geografia.nombre})
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

