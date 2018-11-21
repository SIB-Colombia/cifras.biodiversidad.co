import React, { Component } from 'react'
import FilterList from "../index";

class FilterItem extends Component {
    render () {
        return (
            <li>{this.props.name}</li>
        )
    }
}

export default FilterItem