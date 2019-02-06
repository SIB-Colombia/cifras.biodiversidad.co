import React, { Component } from 'react'
import SlideLayout from "./layout";

class Slide extends Component {
    render () {
        let slideBackground = {
            backgroundImage: 'url(' + this.props.background + ')',
        };
        return (
            <SlideLayout background={this.props.background}>
                <div className="SlideLayout__slide">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">
                            <img src={this.props.svg} alt=""/>
                            {
                                this.props.credit &&
                                <p className="SlideLayout__credit">{this.props.credit}</p>
                            }
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>
            </SlideLayout>
        )
    }
}

export default Slide
