import React from 'react'
import '../../../_styles/components/text-page.scss'

const TextTemplate = props => (

    <section className={`TextPageLayout ${props.sideNavActive ? `sideNavActive`: ` ` }`}>
        <div className="container">
            {props.children}
        </div>
    </section>
)

export default TextTemplate