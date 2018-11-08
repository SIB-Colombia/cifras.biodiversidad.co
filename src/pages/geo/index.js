import React, { Component } from 'react'
import GeoLayout from "./layout";
import Sidebar from "../../components/sidebar";

class Geo extends Component {
    render () {
        return (
            <GeoLayout>
                <Sidebar/>
                <p>Municipios</p>
            </GeoLayout>
        )
    }

}

export default Geo