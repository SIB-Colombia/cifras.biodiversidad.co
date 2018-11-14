import React from 'react'
import "../../../_styles/components/slider.scss"

const SlideLayout = props => (
    <div className="SlideLayout">
        <span className="SlideLayout__number">182.489</span>
        <h2 className="SlideLayout__title">{props.text}</h2>
        <p className="SlideLayout__subtitle">8vo lugar a nivel nacional</p>
    </div>
)

export default SlideLayout