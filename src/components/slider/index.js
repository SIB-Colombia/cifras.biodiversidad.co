import React, { Component } from 'react'
import SliderLayout from "./layout";
import Slide from "./slide";

class Slider extends Component {
    render () {
        return (
            <SliderLayout>
                <Slide text={this.props.text}/>
            </SliderLayout>
        )
    }
}

export default Slider