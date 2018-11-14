import React, { Component } from 'react'
import HomeLayout from "./layout";
import Slider from "../../components/slider";
import HomeLinks from "./components/links/links";
import { connect } from 'react'

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

const mapStateToProps = (state, props) => {
    {
        slides: state.data.slides
    }
}

//export default connect(mapStateToProps)(Home)
export default Home