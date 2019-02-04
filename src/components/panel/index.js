import React from 'react'
import "../../_styles/elements/panel.scss"



const Panel = props => (
    <div className={`row VisualizationPanel panel ${props.loading ? `loading` : ` `}`}>
        {props.children}
    </div>

)

export default Panel