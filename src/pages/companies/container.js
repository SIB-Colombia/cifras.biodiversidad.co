import React, {Component, Fragment} from 'react'
import CompaniesLayout from "./layout";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import * as actions from "../../actions";

class CompaniesContainer extends Component {
    componentDidMount() {
        //this.filterGroup()
        this.props.actions.sidebarVisibility(true)
    }
    componentDidUpdate () {
        this.props.actions.sidebarVisibility(true)
       //this.filterGroup()
    }

    render () {
        return (
            <CompaniesLayout sidebarActive={this.props.sidebar}>
                <h1>{this.props.title}</h1>

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

const mapStateToProps = ( state, props ) => {
    switch ( props.page ) {
        case 'groups': {
            return {
                dataCountry: state.getIn(['data', 'general', 'country']),
                dataDepartment: state.getIn(['data', 'general', 'department']),
                dataGroupsCountry: state.getIn(['data', 'groups', 'data', 'country']),
                dataGroupsDepartment: state.getIn(['data', 'groups', 'data', 'department']),
                activeIdToRender: state.getIn(['data', 'groups', 'active', 'id']),
            }
        }
        case 'geo': {
            console.log('geo')
            //return state.setIn(['groups', 'active'], action.payload.activeGroup)
        }
        /*case 'companies': {
            console.log('companies')
            //return state.setIn(['groups', 'active'], action.payload.activeGroup)
        }
        default:
            return state
        */
    }
}

const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesContainer)
