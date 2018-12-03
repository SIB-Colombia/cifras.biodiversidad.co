import React, { Component } from 'react'
import HighlightsLayout from "./layout";
import Highlight from "./highlight";
import { connect } from 'react-redux'
import {sidebarVisibility} from "../../actions";

class Highlights extends Component {
    componentDidMount () {
        this.props.dispatch(sidebarVisibility(false))
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

export default connect(mapStateToProps)(Highlights)
