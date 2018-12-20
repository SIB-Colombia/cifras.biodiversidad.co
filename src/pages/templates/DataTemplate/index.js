import React, {Component, Fragment} from 'react'
import RadarComponent from "../../../components/chart/RadarComponent/index";
import TableComponent from "../../../components/table/index";
import Panel from "../../../components/panel/index";
import DataTemplateLayout from "./layout";
import connect from "react-redux/es/connect/connect";
import {FETCH_GROUPS, FILTER_GROUP} from "../../../actions/types";


class DataTemplate extends Component {
    render () {
        return (
            <DataTemplateLayout sidebarActive={this.props.sidebar}>
                {console.log(this.props.data)}
                <h1>{this.props.title}</h1>
                <Panel>
                    <RadarComponent
                        ref={ref => this.chartInstance = ref && ref.chartInstance}
                        type='radar'
                    />
                </Panel>
                <TableComponent {...this.props}/>
            </DataTemplateLayout>
        )
    }

}

const mapStateToProps = ( state, props ) => {
    let dataActive = {}
    switch ( props.page ) {
        case 'groups': {
            let activeIdToRender = state.getIn(['data', 'groups', 'active'])
            console.log(props)
            return { data: state.getIn(['data', 'groups', 'data']) }
        }
        case 'geo': {
            return state.setIn(['groups', 'active'], action.payload.activeGroup)
        }
        default:
            return state
    }
    /*const groupsData = state.getIn(['data', 'groups', 'data'])
    dataActive = groupsData.filter(item => (
        item.id === activeIdToRender.toString()
    ))*/


}

export default connect(mapStateToProps)(DataTemplate)
