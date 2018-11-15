import React, { Component } from 'react'
import SliderLayout from "./layout";
import Slide from "./slide";
import Slider from "react-slick"


class HomeSlider extends Component {
    render () {
        let settings = {
            infinite: true,
            slidesToShow: 1,
            fade: true,
            autoplay: true,
            speed: 600,
            autoplaySpeed: 20000,
            arrows: false,
        };
        return (
            <SliderLayout>
                {
                    this.props.slides.length &&

                    <Slider { ...settings }>
                        {
                            this.props.slides.map( item => (

                                    <Slide
                                        {...item}
                                        key={item.id}
                                    />

                            ))

                        }
                    </Slider>
                }
            </SliderLayout>
        )
    }
}



export default HomeSlider