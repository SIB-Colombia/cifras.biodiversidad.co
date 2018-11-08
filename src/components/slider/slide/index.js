import React, { Component } from 'react'
import SlideLayout from "./layout";

class Slide extends Component {
    render () {
        return (
            <SlideLayout
                text={this.props.text}
            />
        )
    }
}

export default Slide