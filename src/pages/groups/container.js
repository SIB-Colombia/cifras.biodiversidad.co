import React, {Component} from 'react'
import RadarComponent from "../../components/chart/RadarComponent/index";
import TableComponent from "./table/index";
import Panel from "../../components/panel/index";
import GroupsLayout from "./layout";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import * as actions from "../../actions";

class GroupsContainer extends Component {
    componentDidMount() {
        this.filterGroup()
    }
    componentDidUpdate () {
        this.filterGroup()
    }

    render () {
        return (
            <GroupsLayout sidebarActive={this.props.sidebar}>
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
            </GroupsLayout>
        )
    }

    filterGroup() {
        let dataCountryActive = this.props.dataGroupsCountry.filter(item => (
            item.grupoBiologicoGeografia.grupoBiologico.id === this.props.activeIdToRender.id
            //item.id === this.props.activeIdToRender.id
        ))
        let dataDepartmentActive = this.props.dataGroupsDepartment.filter(item => (
            item.grupoBiologicoGeografia.grupoBiologico.id === this.props.activeIdToRender.id
            //item.id === this.props.activeIdToRender.id
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
        dataCountry: state.getIn(['data', 'general', 'country']),
        dataDepartment: state.getIn(['data', 'general', 'department']),
        dataGroupsCountry: state.getIn(['data', 'groups', 'data', 'country']),
        dataGroupsDepartment: state.getIn(['data', 'groups', 'data', 'department']),
        activeIdToRender: state.getIn(['data', 'groups', 'active', 'item']),
    }
)

const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(GroupsContainer)
