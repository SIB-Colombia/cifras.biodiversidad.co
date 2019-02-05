import React from 'react'
import '../../_styles/components/tabs.scss'

const TabsLayout = props => (
    <div className="TabsLayout tabs">
        {props.children}
    </div>
)

export default TabsLayout