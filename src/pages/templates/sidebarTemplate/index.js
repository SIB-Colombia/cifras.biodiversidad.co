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


class SidebarTemplate extends Component {

    componentDidMount () {
        const urlValue = queryString.parse(this.props.location.search)
        //console.log(urlValue)
        //this.props.actions.filterGroup(urlValue)

        this.props.actions.fetchGroups(this.props.data)

        this.props.actions.sidebarVisibility(true)
        this.props.actions.buttonSidebarVisibility(true)
    }
    render () {

        return (

            <Fragment>
                {console.log(this.props.activeGroup)}
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
                    <TableComponent/>
                </SidebarTemplateLayout>
            </Fragment>
        )
    }

}

const mapStateToProps = ( state ) => {
    let activeIdToRender = state.getIn(['data', 'groups', 'data'])
    const activeeDataToRender = state.getIn(['data', 'groups', 'active'])

    console.log(activeIdToRender)
    console.log(activeeDataToRender)
    return (
        {
            sidebarVisible: state.getIn(['interaction', 'sidebar']),
        }
    )
}


const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(SidebarTemplate)
