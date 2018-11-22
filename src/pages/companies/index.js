import React, { Component } from 'react'
import CompaniesLayout from "./layout";
import Sidebar from "../../components/sidebar";
import connect from "react-redux/es/connect/connect";

class Companies extends Component {
    componentDidMount () {
        this.props.dispatch({
            type: 'BUTTON_SIDEBAR_VISIBILITY',
            payload: {
                toggleSidebarVisible: true
            }
        })
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

export default connect(mapStateToProps)(Companies)
