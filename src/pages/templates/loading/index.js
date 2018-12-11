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
                <LoadingTemplateLayout>
                    <h1>Cargando datos</h1>
                    <Panel loading={true}>

                    </Panel>
                    <Panel loading={true}>

                    </Panel>
                    <Panel loading={true}>

                    </Panel>
                    <Panel loading={true}>

                    </Panel>
                    <Panel loading={true}>

                    </Panel>
                </LoadingTemplateLayout>
            </Fragment>
        )
    }
}


export default LoadingTemplate
