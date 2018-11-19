import React, { Component } from 'react'
import SidebarLayout from "./layout";


class Sidebar extends Component {
    render () {
        return (
            <SidebarLayout>
                <h3>{this.props.filterTitle}</h3>

                <ul className="filterLists">
                    <!--<FilterItem/>-->
                </ul>
            </SidebarLayout>
        )
    }
}

export default Sidebar