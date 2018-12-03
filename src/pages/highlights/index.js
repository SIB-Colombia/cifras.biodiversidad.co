import React, { Component } from 'react'
import HighlightsLayout from "./layout";
import Highlight from "./highlight";
import { connect } from 'react-redux'
import {bindActionCreators} from "redux";
import * as actions from "../../actions";

class Highlights extends Component {
    componentDidMount () {
        this.props.actions.sidebarVisibility(false)
        this.props.actions.buttonSidebarVisibility(false)
    }
    render () {
        return (
            <HighlightsLayout>
                {
                    this.props.highlights.map( item => (
                        <Highlight
                            {...item}
                            key={item.id}
                        />
                    ))
                }
            </HighlightsLayout>
        )
    }
}

const mapStateToProps = (state, props) => (
    {
        highlights: state.data.highlights
    }
)

const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
)
export default connect(mapStateToProps, mapDispatchToProps)(Highlights)
