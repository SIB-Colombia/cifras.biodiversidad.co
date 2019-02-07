import React, {Component, Fragment} from 'react'
import {GROUPS} from "../../actions/services/queries";
import {Query} from "react-apollo";
import LoadingTemplate from '../templates/loading';
import {bindActionCreators} from "redux";
import * as actions from "../../actions";
import connect from "react-redux/es/connect/connect";
import Sidebar from "../../components/sidebar";
import queryString from "query-string";
import GroupsContainer from "./container";

class Groups extends Component {
    componentDidMount () {
        this.props.actions.sidebarVisibility(false)
        this.props.actions.buttonSidebarVisibility(true)
        this.props.actions.setActiveGroupImage("https://s3.amazonaws.com/sib-resources/images/santander/cifras-san-42.svg")
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
                                    <Sidebar title="Grupos Biológicos"/>
                                }
                                <GroupsContainer
                                    sidebar={this.props.sidebarVisible}
                                    page='groups'
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
        let groupsList = [
            {id: '0', nombre: 'Todos', aplica: true, grupoBiologicoHijos: [], urlImagen: "https://s3.amazonaws.com/sib-resources/images/santander/cifras-san-42.svg"},
            data.animales,
            data.plantas,
            data.hongos,
            data.algas,
            data.liquenes,
        ]

        this.props.actions.fetchGeneralDataCountry(data.vistaGeneralColombia)
        this.props.actions.fetchGeneralDataDepartment(data.vistaGeneralDepartamento)
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