import React, {Component, Fragment} from 'react'
import {COMPANIES} from "../../actions/services/queries";
import {Query} from "react-apollo";
import LoadingTemplate from '../templates/loading';
import {bindActionCreators} from "redux";
import * as actions from "../../actions";
import connect from "react-redux/es/connect/connect";
import CompaniesContainer from './container'
import Sidebar from "../../components/sidebar";
import queryString from "query-string";

class Companies extends Component {
    componentDidMount () {
        this.props.actions.sidebarVisibility(false)
        this.props.actions.buttonSidebarVisibility(true)
        this.setActiveGroup()
    }

    componentDidUpdate() {
        this.setActiveGroup()
    }

    render () {
        return (
            <Query query={COMPANIES}>
                {
                    ({ loading, error, data}) => {
                        if ( loading ) return <LoadingTemplate/>
                        if ( error ) console.log(error)

                        this.saveDataToState(data)
                        return (
                            <Fragment>
                                {
                                    this.props.sidebarVisible &&
                                    <Sidebar/>
                                }
                                <CompaniesContainer
                                    sidebar={this.props.sidebarVisible}
                                    title="Búsqueda por entidades"
                                    dataVisualization={false}
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

    saveDataToState (data) {
        let sidebarItems = []
        let companiesTypes = [...new Set(data.vistaEntidades.map(item => item.entidadPublicadoraGeografia.entidadPublicadora.tipo))];
        companiesTypes.forEach((i, k) => {
            sidebarItems.push({id: k, nombre: i, grupoBiologicoHijos: []})
        })
        this.props.actions.fetchCompaniesData(data.vistaEntidades)
        this.props.actions.sidebarItems(sidebarItems)

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

export default connect(mapStateToProps, mapDispatchToProps)(Companies)