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
        this.saveDataToState(this.props.data)
    }

    componentDidUpdate () {
        this.props.actions.activeGroupData(this.props.dataStateActive)
    }

    render () {
        console.log(this.props)
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

    saveDataToState(data) {
        let groupsView = {
            country: data.vistaGeneralColombia,
            state: data.vistaGeneralDepartamento,
            countryGroups: data.vistaGruposColombia,
            stateGroups: data.vistaGruposDepartamento
        }
        let groupsList = [
            data.animales,
            data.plantas,
            data.hongos,
            data.algas,
            data.liquenes,
        ]

        this.props.actions.fetchGroupsData(groupsView)
        this.props.actions.sidebarItems(groupsList)
    }

}

const mapStateToProps = ( state, props ) => {
    let dataStateActive = {}
    let activeIdToRender = state.getIn(['data', 'groups', 'active', 'id'])
    switch ( props.page ) {
        case 'groups': {
            const groupsData = state.getIn(['data', 'groups', 'data'])
            dataStateActive = groupsData.stateGroups.filter(item => (
                item.grupoBiologicoGeografia.grupoBiologico.id === activeIdToRender
            ))
            return {
                data: state.getIn(['data', 'groups', 'data']),
                dataStateActive
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
