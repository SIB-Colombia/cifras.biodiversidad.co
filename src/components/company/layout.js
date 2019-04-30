import React from 'react'
import "../../_styles/components/company.scss"

const CompanyLayout = props => (
    <div className="col-4">
        <div className="Company">
            {props.children}
        </div>
    </div>
)

export default CompanyLayout