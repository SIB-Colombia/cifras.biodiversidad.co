import React, { Component } from 'react'
import SidebarLayout from "./layout";
import FilterList from "./filterList";


class Sidebar extends Component {
    render () {
        return (

            <SidebarLayout>
                <h3>Sidebar</h3>
                {/*loop itera sobre los grupos biologicos principales*/}
                <FilterList/>
            </SidebarLayout>
        )
    }
}

export default Sidebar