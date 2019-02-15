import React, { Component } from 'react'
import SlideLayout from "./layout";

class Slide extends Component {
    render () {
        const subtitle = {__html: this.props.subtitle };
        let slideBackground = {
            backgroundImage: 'url(' + this.props.background + ')',
        };
        return (
            <SlideLayout background={this.props.background}>
                <div className="SlideLayout__slide">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-6">
                            <h3 className="SlideLayout__title" dangerouslySetInnerHTML={subtitle}></h3>
                            {
                                this.props.credit &&
                                <p className="SlideLayout__credit">{this.props.credit}</p>
                            }
                        </div>
                        <div className="col-5"></div>
                    </div>
                </div>
            </SlideLayout>
        )
    }
}

export default Slide
