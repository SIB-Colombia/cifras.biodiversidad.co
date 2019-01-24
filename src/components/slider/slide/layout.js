import React from 'react'
import "../../../_styles/components/slider.scss"

const SlideLayout = props => (
    <div className="SlideLayout" style={{backgroundImage: `url(${props.background}`}}>
        {props.children}
    </div>
)

export default SlideLayout