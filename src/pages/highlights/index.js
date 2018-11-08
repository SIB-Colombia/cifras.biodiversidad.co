import React, { Component } from 'react'
import HighlightsLayout from "./layout";
import Highlight from "./highlight";

class Highlights extends Component {
    render () {
        return (
            <HighlightsLayout>
                <Highlight/>
            </HighlightsLayout>
        )
    }

}

export default Highlights