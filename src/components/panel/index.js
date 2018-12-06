import React from 'react'
import "../../_styles/components/panel.scss"


const Panel = props => (
    <div className={`VisualizationPanel panel ${props.loading ? `loading` : ` `}`}>
        <div className="illustration or map col-6" >
            {props.children}
        </div>
        <div className="col-6">


        </div>
    </div>

)

export default Panel