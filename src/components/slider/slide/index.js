import React, { Component } from 'react'
import SlideLayout from "./layout";

class Slide extends Component {
    render () {
        return (
            <SlideLayout>
                <div>
                    {this.props.text}
                </div>
            </SlideLayout>
        )
    }
}

export default Slide