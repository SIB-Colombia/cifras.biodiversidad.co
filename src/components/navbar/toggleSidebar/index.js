import React, { Component } from 'react'
import "../../../_styles/components/toggleSidebar.scss"

class ToggleSidebar extends Component {
    render () {
        return (
            <div onClick={Map.handleClick} className="ToggleSidebarLayout">
                <div className="burgerIcon">
                    <span>-</span>
                    <span>-</span>
                    <span>-</span>
                </div>
            </div>
        )
    }
}


export default ToggleSidebar