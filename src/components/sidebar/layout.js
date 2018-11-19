import React from 'react'
import "../../_styles/components/sidebar.scss"

const SidebarLayout = props => (
    <div className="SidebarLayout">
        {props.children}
    </div>
)

export default SidebarLayout