import React from 'react'

const HighlightsLayout = props => (
    <section className="HighlightsLayout container">
        <div className="row">
            <h1>Cifras destacadas</h1>
        </div>
        <div className="row">
            {props.children}
        </div>
    </section>
)

export default HighlightsLayout