import React, { Component } from 'react'
import FilterListLayout from "./layout";
import FilterItem from "./item";

class FilterList extends Component {
    render () {
        return (
            <FilterListLayout>

                {
                this.props.group.grupoBiologicoHijos &&
                    this.props.group.grupoBiologicoHijos.map( item => (
                        <FilterItem key={item.id} type="" {...item} />
                    ))
            }
            </FilterListLayout>
        )
    }
}

export default FilterList