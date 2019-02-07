import React, {Component, Fragment} from 'react'
import CompaniesLayout from "./layout";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import * as actions from "../../actions";
import CompaniesList from "./companiesList";
import Company from "./company";
import GroupsLayout from "../groups/layout";

class CompaniesContainer extends Component {
    componentDidMount() {
        this.filterCompanies()
        this.props.actions.sidebarVisibility(true)
    }
    componentDidUpdate () {
       this.filterCompanies()
    }

    render () {
        return (
            <CompaniesLayout sidebarActive={this.props.sidebar}>
                <div className="breadcrumb">
                    <h1 className="underline-title">{this.props.title} </h1>
                    <p><span className="caret">></span>{this.props.activeTypeToRenderName}</p>
                </div>

                <div className="row">
                    <CompaniesList/>
                </div>
            </CompaniesLayout>
        )
    }

    filterCompanies() {
        let dataCompaniesActive = this.props.companies.filter(item => (
            item.entidadPublicadoraGeografia.entidadPublicadora.tipo === this.props.activeTypeToRenderName
        ))
        if ( this.props.activeTypeToRenderId === 0 ) {
            this.props.actions.activeCompanyData(this.props.companies)
        } else {
            this.props.actions.activeCompanyData(dataCompaniesActive)
        }
    }


}

const mapStateToProps = ( state, props ) => (
    {
        activeTypeToRenderId: state.getIn(['data', 'companies', 'active', 'type', 'id']),
        activeTypeToRenderName: state.getIn(['data', 'companies', 'active', 'type', 'name']),
        companies: state.getIn(['data', 'companies', 'data', 'companies']),
        activeCompanies: state.getIn(['companies', 'active', 'data'])

    }
)


const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesContainer)
