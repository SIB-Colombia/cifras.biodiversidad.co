import React, {Component, Fragment} from 'react'
import Sidebar from "../../../components/sidebar/index";
import RadarComponent from "../../../components/chart/RadarComponent/index";
import TableComponent from "../../../components/table/index";
import Panel from "../../../components/panel/index";
import DataTemplateLayout from "./layout";
import { bindActionCreators } from "redux";
import * as actions from "../../../actions";
import connect from "react-redux/es/connect/connect";


class DataTemplate extends Component {
    render () {
        return (
            <Fragment>
                {console.log(this.props.data)}
                <h1>{this.props.title}</h1>
                <Panel>
                    <RadarComponent
                        ref={ref => this.chartInstance = ref && ref.chartInstance}
                        type='radar'
                    />
                </Panel>
                <TableComponent {...this.props}/>
            </Fragment>
        )
    }

}

const mapStateToProps = ( state ) => {
    let dataActive = {}
    let activeIdToRender = state.getIn(['data', 'groups', 'active'])
    /*const groupsData = state.getIn(['data', 'groups', 'data'])
    dataActive = groupsData.filter(item => (
        item.id === activeIdToRender.toString()
    ))*/

    return (

        {
            data: state.getIn(['data', 'groups', 'data'])
        }
    )
}

export default connect(mapStateToProps)(DataTemplate)
