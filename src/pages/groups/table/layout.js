import React from 'react'
import 'react-table/react-table.css'
import '../../../_styles/components/table.scss'

const TableComponentLayout = props => (
    <section className="table">
        {props.children}
    </section>
)

export default TableComponentLayout