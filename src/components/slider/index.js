import React, { Component } from 'react'
import SliderLayout from "./layout";
import Slide from "./slide";
import Slider from "react-slick"
import SliderNav from "./nav";
import Counter from "../../pages/home/counter";

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
            speed: 1000,
            autoplaySpeed: 12000,
            arrows: false
        };

        return (
            <SliderLayout>
                <Slider ref={this.setSliderRef}{ ...settings }>
                    {
                        this.props.slides.map( item => (
                            <Slide
                                key={item.get('id')}
                                number={item.get('number')}
                                title={item.get('title')}
                                subtitle={item.get('subtitle')}
                                disclaimer={item.get('disclaimer')}
                                credit={item.get('credit')}
                                background={item.get('background')}
                                svg={item.get('svg')}
                            />
                        ))
                    }
                </Slider>
                <SliderNav direction="prev" handleClick={this.prev}/>
                <SliderNav direction="next" handleClick={this.next}/>
            </SliderLayout>
        )
    }
}



export default HomeSlider