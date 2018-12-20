import React from 'react'
import '../../../_styles/components/data-page.scss'

const DataTemplateLayout = props => (
    <section className='DataPageLayout'>
        <div className="container">
            {props.children}
        </div>
    </section>
)

export default DataTemplateLayout