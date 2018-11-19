import React,  { PureComponent } from 'react'
import "../../../_styles/components/slider.scss"


class SliderNav extends PureComponent {
    render () {
        return (
            <div
                className={`sliderNav ${this.props.direction}`}
                id={`slideTo-${this.props.direction}`}>
                {this.props.text}
            </div>
        )
    }
}

export default SliderNav