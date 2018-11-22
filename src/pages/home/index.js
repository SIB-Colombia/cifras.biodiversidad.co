import React, { Component } from 'react'
import HomeLayout from "./layout";
import HomeSlider from "../../components/slider";
import HomeLinks from "./components/links/links";
import { connect } from 'react-redux'

class Home extends Component {
    componentDidMount () {
        this.props.dispatch({
            type: 'TOOGLE_SIDEBAR',
            payload: {
                toggleSidebarVisible: false
            }
        })
    }
    render () {
        return (
            <HomeLayout>
                <HomeSlider slides={this.props.slides}/>
                <HomeLinks/>
            </HomeLayout>
        )
    }
}

const mapStateToProps = (state, props) => (
    {
        slides: state.data.slides
    }
)

export default connect(mapStateToProps)(Home)
