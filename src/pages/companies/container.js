import React, {Component, Fragment} from 'react'
import CompaniesLayout from "./layout";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import * as actions from "../../actions";
import FilterList from "../../components/sidebar/filterList";
import CompanyLayout from "./company/layout";
import Company from "./company";

class CompaniesContainer extends Component {
    componentDidMount() {
        //this.filterGroup()
        this.props.actions.sidebarVisibility(true)
    }
    componentDidUpdate () {
       //this.filterGroup()
    }

    render () {
        return (
            <CompaniesLayout sidebarActive={this.props.sidebar}>
                <h1 className="underline-title">{this.props.title}</h1>
                <div className="row">
                                    {console.log(this.props.companies)}
                    {
                        this.props.companies.map(item => (
                                <Company
                                    key={item.id}
                                    {...item}

                                />
                        ))
                    }
                </div>
            </CompaniesLayout>
        )
    }

    filterGroup() {
        let dataCountryActive = this.props.dataGroupsCountry.filter(item => (
            //item.grupoBiologicoGeografia.grupoBiologico.id === this.props.activeIdToRender.id
            item.id === this.props.activeIdToRender.id
        ))
        let dataDepartmentActive = this.props.dataGroupsDepartment.filter(item => (
            //item.grupoBiologicoGeografia.grupoBiologico.id === this.props.activeIdToRender.id
            item.id === this.props.activeIdToRender.id
        ))

        if (this.props.activeIdToRender.id === '0') {
            this.props.actions.activeGroupsDataCountry(this.props.dataCountry)
            this.props.actions.activeGroupsDataDepartment(this.props.dataDepartment)
        } else {
            this.props.actions.activeGroupsDataCountry(dataCountryActive)
            this.props.actions.activeGroupsDataDepartment(dataDepartmentActive)
        }

    }


}

const mapStateToProps = ( state, props ) => (
    {
        activeIdToRender: state.getIn(['data', 'groups', 'active', 'item']),
        companies: state.getIn(['data', 'companies', 'data', 'companies'])
    }
)


const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesContainer)
