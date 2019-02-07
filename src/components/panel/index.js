import React from 'react'
import "../../_styles/elements/panel.scss"



const Panel = props => (
    <div className={`row Panel Panel--visualization ${props.loading ? `loading` : ``}`}>
        {
            props.header &&
            <div className="Panel__header">
                <h3>{props.header}</h3>
            </div>
        }
        {props.children}
    </div>

)

export default Panel