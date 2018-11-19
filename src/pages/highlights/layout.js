import React from 'react'

const HighlightsLayout = props => (
    <section className="HighlightsLayout container">
        <div className="row">
            {props.children}
        </div>
    </section>
)

export default HighlightsLayout