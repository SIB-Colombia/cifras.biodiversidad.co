import React, {Component, Fragment} from 'react'
import RadarComponent from "../../../components/chart/RadarComponent/index";
import TableComponent from "../../../components/table/index";
import Panel from "../../../components/panel/index";
import DataTemplateLayout from "./layout";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import * as actions from "../../../actions";

class DataTemplate extends Component {
    componentDidUpdate () {
        console.log(this.props)
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
                data: state.getIn(['data', 'groups', 'data']),
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
