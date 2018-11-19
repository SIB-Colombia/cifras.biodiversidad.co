import React, { Component } from 'react'
import SliderLayout from "./layout";
import Slide from "./slide";
import Slider from "react-slick"
import SliderNav from "./nav";


class HomeSlider extends Component {
    next () {
        this.slider.slickNext()
    }
    prev () {
        this.slider.slickNext()
    }
    render () {
        let settings = {
            infinite: true,
            slidesToShow: 1,
            fade: true,
            autoplay: true,
            speed: 600,
            autoplaySpeed: 20000,

        };
        return (
            <SliderLayout>
                <SliderNav/>
                {
                    this.props.slides.length &&

                    <Slider ref={}{ ...settings }>
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