import React, { Component } from 'react'
import SliderLayout from "./layout";
import Slide from "./slide";
import Slider from "react-slick"
import SliderNav from "./nav";


class HomeSlider extends Component {
    setSliderRef = e => {
        this.slider = e
    }
    next = () => {
        this.slider.slickNext()
    }
    prev = () => {
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
            arrows: false

        };
        return (
            <SliderLayout>
                {
                    this.props.slides.length &&

                    <Slider ref={this.setSliderRef}{ ...settings }>
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

                <SliderNav direction="prev" handleClick={this.prev}/>
                <SliderNav direction="next" handleClick={this.next}/>
            </SliderLayout>
        )
    }
}



export default HomeSlider