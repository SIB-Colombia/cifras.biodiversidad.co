import React, {Component, Fragment} from 'react'
import RadarComponent from "../../../components/chart/RadarComponent/index";
import TableComponent from "../../../components/table/index";
import Panel from "../../../components/panel/index";
import DataTemplateLayout from "./layout";
import connect from "react-redux/es/connect/connect";

class DataTemplate extends Component {
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
            const groupsData = state.getIn(['data', 'groups', 'data'])
            dataActive = groupsData.allVistagrupobiologico.filter(item => (
                item.id === activeIdToRender.toString()
            ))
            return {
                data: state.getIn(['data', 'groups', 'data']),
                active: dataActive
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

export default connect(mapStateToProps)(DataTemplate)
