import React, {Component, Fragment} from 'react'
import Panel from "../../../components/panel/index";
import LoadingTemplateLayout from "./layout";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import * as actions from "../../../actions";

class LoadingTemplate extends Component {
    componentDidMount () {
        this.props.actions.sidebarVisibility(false)
    }

    render () {
        return (
            <Fragment>
                <LoadingTemplateLayout>
                    <h1 className="underline-title">Cargando datos</h1>
                    <Panel loading={true}></Panel>
                    <Panel loading={true}></Panel>
                    <Panel loading={true}></Panel>
                    <Panel loading={true}></Panel>
                    <Panel loading={true}></Panel>
                    <Panel loading={true}></Panel>

                </LoadingTemplateLayout>
            </Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
)

export default connect(null, mapDispatchToProps)(LoadingTemplate)
