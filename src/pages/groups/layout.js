import React from 'react'
import '../../_styles/components/groups-layout.scss'

const GroupsLayout = props => (
    <section className={props.sidebarActive ? `GroupsLayout sidebarActive` : `GroupsLayout`}>
        {props.children}
    </section>
)

export default GroupsLayout