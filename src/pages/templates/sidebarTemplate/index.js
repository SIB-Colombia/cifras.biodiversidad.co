import React, {Component, Fragment} from 'react'
import Sidebar from "../../../components/sidebar/index";
import RadarComponent from "../../../components/chart/RadarComponent/index";
import TableComponent from "../../../components/table/index";
import Panel from "../../../components/panel/index";
import SidebarTemplateLayout from "./layout";
import queryString from "query-string";
import { bindActionCreators } from "redux";
import * as actions from "../../../actions";
import connect from "react-redux/es/connect/connect";
import { Map as map } from 'immutable'


class SidebarTemplate extends Component {

    componentDidMount () {
        const urlValue = queryString.parse(this.props.location.search)
        //this.props.actions.filterGroup(urlValue)
        this.props.actions.fetchGroups(this.props.data)
        this.props.actions.sidebarVisibility(true)
        this.props.actions.buttonSidebarVisibility(true)
        this.props.actions.filterGroup("")
    }

    render () {

        return (

            <Fragment>
                {
                    this.props.sidebarVisible &&
                    <Sidebar items={this.props.sidebarItems}/>
                }
                <SidebarTemplateLayout sidebarActive={this.props.sidebarVisible}>
                    <h1>{this.props.title}</h1>
                    <Panel>
                        <RadarComponent
                            {...this.props}
                            ref={ref => this.chartInstance = ref && ref.chartInstance}
                            type='radar'
                        />
                    </Panel>
                    <TableComponent dataTable={this.props.dataActive}/>
                </SidebarTemplateLayout>
            </Fragment>
        )
    }

}

const mapStateToProps = ( state ) => {
    let dataActive = {}
    let activeIdToRender = state.getIn(['data', 'groups', 'active'])
    const groupsData = state.getIn(['data', 'groups', 'data'])
    dataActive = groupsData.filter(item => (
        item.id === activeIdToRender.toString()
    ))

    return (
        {
            sidebarVisible: state.getIn(['interaction', 'sidebar']),
            dataActive:  dataActive
        }
    )
}


const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(SidebarTemplate)
