import React from 'react'

const GeoLayout = props => (
    <section className={`DataPageLayout ${props.sidebarActive ? `sidebarActive`: ` ` }`}>
        <div className="container">
            {props.children}
        </div>
    </section>
)

export default GeoLayout