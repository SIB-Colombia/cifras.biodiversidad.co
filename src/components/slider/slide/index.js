import React, { Component } from 'react'
import SlideLayout from "./layout";

class Slide extends Component {
    render () {
        return (
            <SlideLayout>
                <span className="SlideLayout__number">{this.props.number}</span>
                <h2 className="SlideLayout__title">{this.props.title}</h2>
                <p className="SlideLayout__subtitle">{this.props.subtitle}</p>
                {
                    this.props.disclaimer &&
                    <p className="SlideLayout__disclaimer">{this.props.disclaimer}</p>
                }
            </SlideLayout>
        )
    }
}

export default Slide


