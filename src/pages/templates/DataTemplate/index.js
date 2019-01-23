import React, {Component, Fragment} from 'react'
import RadarComponent from "../../../components/chart/RadarComponent/index";
import TableComponent from "../../../components/table/index";
import Panel from "../../../components/panel/index";
import DataTemplateLayout from "./layout";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import * as actions from "../../../actions";

class DataTemplate extends Component {
    componentDidMount() {
        let dataCountryActive = this.props.dataCountry.filter(item => (
            item.grupoBiologicoGeografia.grupoBiologico.id === this.props.activeIdToRender.id
            //item.id === this.props.activeIdToRender.id
        ))
        let dataDepartmentActive = this.props.dataDepartment.filter(item => (
            item.grupoBiologicoGeografia.grupoBiologico.id === this.props.activeIdToRender.id
            //item.id === this.props.activeIdToRender.id
        ))
        this.props.actions.activeGroupsDataCountry(dataCountryActive)
        this.props.actions.activeGroupsDataDepartment(dataDepartmentActive)
    }
    componentDidUpdate () {
        let dataCountryActive = this.props.dataCountry.filter(item => (
            item.grupoBiologicoGeografia.grupoBiologico.id === this.props.activeIdToRender.id
            //item.id === this.props.activeIdToRender.id
        ))
        let dataDepartmentActive = this.props.dataDepartment.filter(item => (
            item.grupoBiologicoGeografia.grupoBiologico.id === this.props.activeIdToRender.id
            //item.id === this.props.activeIdToRender.id
        ))
        this.props.actions.activeGroupsDataCountry(dataCountryActive)
        this.props.actions.activeGroupsDataDepartment(dataDepartmentActive)

    }

    render () {
        return (
            <DataTemplateLayout sidebarActive={this.props.sidebar}>
                <h1>{this.props.title}</h1>
                {
                    this.props.dataVisualization &&
                    <Panel>
                        <RadarComponent
                            ref={ref => this.chartInstance = ref && ref.chartInstance}
                            type='radar'
                            {...this.props}
                        />
                    </Panel>
                }
                <TableComponent/>
            </DataTemplateLayout>
        )
    }



}

const mapStateToProps = ( state, props ) => {
    switch ( props.page ) {
        case 'groups': {
            return {
                dataCountry: state.getIn(['data', 'groups', 'data', 'country']),
                dataDepartment: state.getIn(['data', 'groups', 'data', 'department']),
                activeIdToRender: state.getIn(['data', 'groups', 'active', 'id']),
            }
        }
        case 'geo': {
            console.log('geo')
            //return state.setIn(['groups', 'active'], action.payload.activeGroup)
        }
        case 'companies': {
            console.log('companies')
            //return state.setIn(['groups', 'active'], action.payload.activeGroup)
        }
        default:
            return state
    }
}

const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(DataTemplate)
