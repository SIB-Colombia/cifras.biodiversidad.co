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
        console.log(urlValue)
        this.props.actions.filterGroup(urlValue)

        this.props.actions.sidebarVisibility(true)
        this.props.actions.buttonSidebarVisibility(true)
    }
    render () {
        const groupsList = [
            this.props.data.animales,
            this.props.data.plantas,
            this.props.data.hongos,
            this.props.data.algas,
            this.props.data.liquenes,
        ]
        return (

            <Fragment>

                {
                    this.props.sidebarVisible &&
                    <Sidebar items={groupsList}/>
                }
                <SidebarTemplateLayout sidebarActive={this.props.sidebarVisible}>
                    <h1>{this.props.title}</h1>
                    {/*console.log(this.props.data)*/}
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

const mapStateToProps = ( state ) => (
    {
        sidebarVisible: state.interaction.sidebar
    }
)

const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(SidebarTemplate)
