import React, { Component } from 'react'
import HomeLayout from "./layout";
import HomeSlider from "../../components/slider";
import HomeLinks from "./components/links/links";
import { connect } from 'react-redux'
import {bindActionCreators} from "redux";
import * as actions from "../../actions";
import {SANTANDER} from "../../actions/services/queries";

class Home extends Component {

    componentDidMount () {
        this.props.actions.sidebarVisibility(false)
        this.props.actions.buttonSidebarVisibility(false)
    }
    render () {
        return (
            <HomeLayout>
                <HomeSlider slides={this.props.slides}/>
                {/*<Counter/>*/}
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
