import React from 'react'
import '../../../_styles/components/sidebar-page.scss'

const LoadingTemplateLayout = props => (
    <section className={props.sidebarActive ? `SidebarPageLayout sidebarActive` : `SidebarPageLayout`}>
        <div className="container">
            {props.children}
        </div>
    </section>
)

export default LoadingTemplateLayout