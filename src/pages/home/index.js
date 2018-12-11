import React, { Component } from 'react'
import HomeLayout from "./layout";
import HomeSlider from "../../components/slider";
import HomeLinks from "./components/links/links";
import { connect } from 'react-redux'
import {sidebarVisibility} from "../../actions";
import {bindActionCreators} from "redux";
import * as actions from "../../actions";

class Home extends Component {
    componentDidMount () {
        this.props.actions.sidebarVisibility(false)
        this.props.actions.buttonSidebarVisibility(false)
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
        slides: state.getIn(['data', 'slides'])
    }
)

const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
