import React, {Component, Fragment} from 'react'
import Sidebar from "../../../components/sidebar/index";
import RadarComponent from "../../../components/chart/RadarComponent/index";
import TableComponent from "../../../components/table/index";
import Panel from "../../../components/panel/index";
import SidebarTemplateLayout from "./layout";

class SidebarTemplate extends Component {

    render () {
        return (
            <Fragment>

                {
                    this.props.sidebarVisible &&
                    <Sidebar groups={this.props.groups}/>
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


export default SidebarTemplate
