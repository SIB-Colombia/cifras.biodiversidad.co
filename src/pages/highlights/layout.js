import React from 'react'
import "../../_styles/components/highlight.scss"

const HighlightsLayout = props => (
    <section className="HighlightsLayout">
        <div className="container">
            <div className="row">
                <h1 className="underline-title">Cifras destacadas</h1>
            </div>
        </div>
        <div className="container--full">
            <div className="row">
                {props.children}
            </div>
        </div>
    </section>
)

export default HighlightsLayout