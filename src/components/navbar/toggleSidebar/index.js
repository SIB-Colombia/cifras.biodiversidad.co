import React, { Component } from 'react'
import ToggleSidebarLayout from "./layout";

class ToggleSidebar extends Component {
    render () {
        return (
            <ToggleSidebarLayout>
                <span>-</span>
                <span>-</span>
                <span>-</span>
            </ToggleSidebarLayout>
        )
    }
}

export default ToggleSidebar