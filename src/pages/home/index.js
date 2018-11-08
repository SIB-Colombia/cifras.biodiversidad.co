import React, { Component } from 'react'
import HomeLayout from "./layout";
import Slider from "../../components/slider";
import HomeLinks from "./components/links/links";
import Navbar from "../../components/navbar";

class Home extends Component {
    render () {
        return (
            <HomeLayout>
                <Slider text={'Slide'}/>
                <HomeLinks/>
            </HomeLayout>
        )
    }

}

export default Home