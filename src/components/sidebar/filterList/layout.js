import React from 'react'
import "../../../_styles/components/sidebar.scss"

const FilterListLayout = props => (
    <ul className="FilterListLayout">
        {props.children}
    </ul>
)

export default FilterListLayout