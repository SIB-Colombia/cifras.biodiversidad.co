import React, { Component } from 'react'
import SliderLayout from "./layout";
import Slide from "./slide";
import { connect } from 'react-redux'

class Slider extends Component {
    render () {
        return (
            <SliderLayout>
                <Slide/>
                {/*

                    this.props.slides.map((item) => {
                        return <Slide
                            {...item}
                            key={item.id}
                        />
                    })

                */}
            </SliderLayout>
        )
    }
}



export default Slider