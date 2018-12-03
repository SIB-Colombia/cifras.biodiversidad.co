import React, { Component } from 'react'
import GeoLayout from "./layout";
import Sidebar from "../../components/sidebar";
import connect from "react-redux/es/connect/connect";
import {buttonSidebarVisibility} from "../../actions";

class Geo extends Component {
    componentDidMount () {
        this.props.dispatch(buttonSidebarVisibility(true))
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

