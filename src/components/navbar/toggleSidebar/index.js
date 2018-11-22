import React, { Component } from 'react'
import ToggleSidebarLayout from "./layout";

class ToggleSidebar extends Component {
    render () {
        return (
            <ToggleSidebarLayout>
                <div onClick={this.props.handleClick}>
                    <span>-</span>
                    <span>-</span>
                    <span>-</span>
                </div>
            </ToggleSidebarLayout>
        )
    }
}

export default ToggleSidebar