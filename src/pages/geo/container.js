import React, {Component, Fragment} from 'react'
import RadarComponent from "../../components/chart/RadarComponent/index";
import TableComponent from "./table/index";
import Panel from "../../components/panel/index";
import GeoLayout from "./layout";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import * as actions from "../../actions";
import Map from "../../components/illustration/map";

class GeoContainer extends Component {
    componentDidMount() {
        this.filterGroup()
        this.props.actions.sidebarVisibility(true)
    }
    componentDidUpdate () {
        this.filterGroup()
    }

    render () {
        return (
            <GeoLayout sidebarActive={this.props.sidebar}>
                <h1>{this.props.title}</h1>
                {
                    this.props.dataVisualization &&
                    <Panel>
                        <div className="col-6">
                            <Map/>
                        </div>
                        <div className="col-6">
                            <RadarComponent
                                ref={ref => this.chartInstance = ref && ref.chartInstance}
                                type='radar'
                                {...this.props}
                            />
                        </div>
                    </Panel>
                }
                <TableComponent/>
            </GeoLayout>
        )
    }

    filterGroup() {
        let dataTownsActive = this.props.dataTowns.filter(item => (
            //item.grupoBiologicoGeografia.grupoBiologico.id === this.props.activeIdToRender.id
            item.id === this.props.activeIdToRender.id
        ))


        if (this.props.activeIdToRender.id === '0') {
            this.props.actions.activeTownData(this.props.dataDepartment)
            this.props.actions.activeDepartmentData(this.props.dataCountry)
        } else {
            this.props.actions.activeTownData(dataTownsActive)
            this.props.actions.activeDepartmentData(this.props.dataDepartment)
        }

    }


}

const mapStateToProps = ( state, props ) => (
    {
        dataCountry: state.getIn(['data', 'general', 'country']),
        dataDepartment: state.getIn(['data', 'general', 'department']),
        dataTowns: state.getIn(['data', 'geo', 'data', 'towns']),
        activeIdToRender: state.getIn(['data', 'geo', 'active', 'item']),
    }
)


const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(GeoContainer)
