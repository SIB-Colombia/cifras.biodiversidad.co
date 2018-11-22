import React, { Component } from 'react'
import GeoLayout from "./layout";
import Sidebar from "../../components/sidebar";
import connect from "react-redux/es/connect/connect";

class Geo extends Component {
    componentDidMount () {
        this.props.dispatch({
            type: 'TOOGLE_SIDEBAR',
            payload: {
                toggleSidebarVisible: true
            }
        })
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

export default connect(mapStateToProps)(Geo)

