import React, { Component } from 'react'
import GeoLayout from "./layout";
import Sidebar from "../../components/sidebar";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import * as actions from "../../actions";

class Geo extends Component {
    componentDidMount () {
        this.props.actions.sidebarVisibility(true)

        this.props.actions.buttonSidebarVisibility(true)
    }
    render () {
        return (
            <GeoLayout>
                <p>Municipios</p>
            </GeoLayout>
        )
    }

}

const mapStateToProps = ( state, props ) => (
    {
        geo: Object.values( state.data.groups )
    }
)

const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Geo)

