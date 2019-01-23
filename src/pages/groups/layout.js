import React from 'react'
import '../../_styles/components/data-page.scss'

const GroupsLayout = props => (
    <section className={`DataPageLayout ${props.sidebarActive ? `sidebarActive`: ` ` }`}>
        <div className="container">
            {props.children}
        </div>
    </section>
)

export default GroupsLayout