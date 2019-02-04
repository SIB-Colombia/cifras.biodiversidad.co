import React from 'react'
import "../../../_styles/elements/panel.scss"

const CompanyLayout = props => (
    <div className="panel panel--list">
        <div className="row">
            {props.children}
        </div>
    </div>
)

export default CompanyLayout