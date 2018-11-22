import React, { Component } from 'react'
import HighlightsLayout from "./layout";
import Highlight from "./highlight";
import { connect } from 'react-redux'

class Highlights extends Component {
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
