import React from 'react'
import "../../../_styles/components/sidebar.scss"

const FilterListLayout = props => (
    <ul className="FilterList">
        {props.children}
    </ul>
)

export default FilterListLayout