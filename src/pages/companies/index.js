import React, { Component } from 'react'
import CompaniesLayout from "./layout";
import Sidebar from "../../components/sidebar";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import * as actions from "../../actions";

class Companies extends Component {
    componentDidMount () {
        this.props.actions.buttonSidebarVisibility(true)
    }
    render() {
        return (
            <CompaniesLayout>
                <p>Entidades</p>
            </CompaniesLayout>
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

export default connect(mapStateToProps, mapDispatchToProps)(Companies)
