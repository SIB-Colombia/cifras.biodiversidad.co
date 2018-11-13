import React from 'react'
import HomeLink from "./components/link";
import "../../../../_styles/components/home-links.scss";

const HomeLinks = props => (
    <div className="container Homelinks">
        <div className="row">
            <div className="col-4">
                <HomeLink/>
            </div>
            <div className="col-4">
                <HomeLink/>
            </div>
            <div className="col-4">
                <HomeLink/>
            </div>
            <div className="col-4">
                <HomeLink/>
            </div>
        </div>
    </div>
)

export default HomeLinks