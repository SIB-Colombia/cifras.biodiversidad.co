import React, {Component, Fragment} from 'react'
import { COMPANIES_LIST } from "../../actions/services/queries";
import {Query} from "react-apollo";
import LoadingTemplate from '../templates/loading';
import {bindActionCreators} from "redux";
import * as actions from "../../actions";
import connect from "react-redux/es/connect/connect";
import Sidebar from "../../components/sidebar";
import queryString from "query-string";
import DataTemplate from "../templates/DataTemplate";
import GeoLayout from "../geo/layout";
import Panel from "../../components/panel";
import RadarComponent from "../../components/chart/RadarComponent";
import TableComponent from "../../components/table";

class Companies extends Component {
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
                    <h1>Entidades</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Companies)