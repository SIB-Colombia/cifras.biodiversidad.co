import React, { Component } from 'react'
import HomeLayout from "./layout";
import HomeSlider from "../../components/slider";
import HomeLinks from "./components/links/links";
import { connect } from 'react-redux'
import {sidebarVisibility} from "../../actions";
import {bindActionCreators} from "redux";
import * as actions from "../../actions";
import { Query } from 'react-apollo';
import {DEPARTMENT} from "../../actions/services/queries";
import LoadingTemplate from "../templates/loading";

class Home extends Component {
    componentDidMount () {
        this.props.actions.sidebarVisibility(false)
        this.props.actions.buttonSidebarVisibility(false)
    }
    render () {
        return (
            <Query query={DEPARTMENT}>
                {
                    ({ loading, error, data }) => {
                        if (loading) return <LoadingTemplate/>
                        if (error) console.log(error)
                        console.log(data)
                        this.saveDataToState(data)
                        return (
                            <HomeLayout>
                                <HomeSlider slides={this.props.slides}/>
                                <HomeLinks/>
                            </HomeLayout>
                        )
                    }
                    //enviar datos al estado ya esta creada la acccion en los reducers
                }
            </Query>
        )
    }

    saveDataToState(data) {
        this.props.actions.fetchDepartmentData(data)
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
