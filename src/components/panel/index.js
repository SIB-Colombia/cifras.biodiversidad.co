import React from 'react'

const Panel = props => (
    <div className="VisualizationPanel card white row">
        <div className="illustration or map col-6" >
            {props.children}
        </div>
        <div className="col-6">


        </div>
    </div>

)

export default Panel