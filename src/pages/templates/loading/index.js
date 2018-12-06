import React, {Component, Fragment} from 'react'
import Sidebar from "../../../components/sidebar/index";
import RadarComponent from "../../../components/chart/RadarComponent/index";
import TableComponent from "../../../components/table/index";
import Panel from "../../../components/panel/index";
import LoadingTemplateLayout from "./layout";

class LoadingTemplate extends Component {

    render () {
        return (
            <Fragment>

                {
                    this.props.sidebarVisible &&
                    <Sidebar/>
                }
                <LoadingTemplateLayout sidebarActive={this.props.sidebarVisible}>
                    <h1>Cargando</h1>
                    <Panel>
                       Cargando
                    </Panel>
                    <TableComponent/>
                </LoadingTemplateLayout>
            </Fragment>
        )
    }
}


export default LoadingTemplate
