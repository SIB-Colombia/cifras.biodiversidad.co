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
                            key={item.get('id')}
                            size={item.get('size')}
                            color={item.get('color')}
                            align={item.get('align')}
                            number={item.get('number')}
                            title={item.get('title')}
                            text={item.get('text')}
                            link={item.get('link')}
                        />
                    ))
                }
            </HighlightsLayout>
        )
    }
}

const mapStateToProps = (state, props) => (
    {
        highlights: state.getIn(['data', 'highlights'])
    }
)

const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
)
export default connect(mapStateToProps, mapDispatchToProps)(Highlights)
