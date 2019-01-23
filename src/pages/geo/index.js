import React, {Component, Fragment} from 'react'
import GeoLayout from "./layout";
import Sidebar from "../../components/sidebar";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import * as actions from "../../actions";
import DataTemplate from "../templates/DataTemplate";
import Panel from "../../components/panel";
import RadarComponent from "../../components/chart/RadarComponent";
import TableComponent from "../../components/table";
import DataTemplateLayout from "../templates/DataTemplate/layout";

class Geo extends Component {
    componentDidMount () {
        this.props.actions.sidebarVisibility(true)
        this.props.actions.buttonSidebarVisibility(true)
    }
    render () {
        return (
            <Fragment>
                {
                    this.props.sidebarVisible &&
                    <Sidebar/>
                }
                <GeoLayout sidebarActive={this.props.sidebarVisible}>
                    <h1>Búsqueda por municipios</h1>
                    <Panel>
                        <RadarComponent
                            ref={ref => this.chartInstance = ref && ref.chartInstance}
                            type='radar'
                        />
                    </Panel>
                    <TableComponent/>
                </GeoLayout>
            </Fragment>
        )
    }
}

const mapStateToProps = ( state ) => {
    return (
        {
            sidebarVisible: state.getIn(['interaction', 'sidebar', 'active']),
        }
    )
}

const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Geo)

