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
        //this.filterGroup()
    }
    componentDidUpdate () {
        //this.filterGroup()
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

export default connect(mapStateToProps, mapDispatchToProps)(DataTemplate)
