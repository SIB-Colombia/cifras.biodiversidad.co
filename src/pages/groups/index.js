import React, {Component, Fragment} from 'react'
import {GROUPS} from "../../actions/services/queries";
import {Query} from "react-apollo";
import LoadingTemplate from '../templates/loading';
import {bindActionCreators} from "redux";
import * as actions from "../../actions";
import connect from "react-redux/es/connect/connect";
import Sidebar from "../../components/sidebar";
import queryString from "query-string";
import DataTemplate from "../templates/DataTemplate";

class Groups extends Component {
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
            <Query query={GROUPS}>
                {
                    ({ loading, error, data }) => {
                        if(loading) return <LoadingTemplate />
                        if(error) console.log(error)

                        this.saveDataToState(data)
                        return (
                            <Fragment>
                                {
                                    this.props.sidebarVisible &&
                                    <Sidebar/>
                                }
                                <DataTemplate
                                    sidebar={this.props.sidebarVisible}
                                    page={'groups'}
                                    title="Búsqueda por grupos biológicos"
                                    dataVisualization={true}
                                />
                            </Fragment>
                        )
                    }
                }
            </Query>
        )
    }

    setActiveGroup() {
        let urlValue = this.props.location.search.length === 0 ? {id: '0'} : queryString.parse(this.props.location.search)
        this.props.actions.filterGroup(urlValue)
    }

    saveDataToState(data) {
        let groupsView = {
            country: data.vistaGeneralColombia,
            state: data.vistaGeneralDepartamento,
            countryGroups: data.vistaGruposColombia,
            stateGroups: data.vistaGruposDepartamento
        }
        let groupsList = [
            {id: '0', nombre: 'Todos', grupoBiologicoHijos: []},
            data.animales,
            data.plantas,
            data.hongos,
            data.algas,
            data.liquenes,
        ]

        this.props.actions.fetchGroupsDataDepartment(data.vistaGruposDepartamento)
        this.props.actions.fetchGroupsDataCountry(data.vistaGruposColombia)
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

export default connect(mapStateToProps, mapDispatchToProps)(Groups)