import React, { Component } from 'react'
import FilterListLayout from "./layout";
import FilterItem from "./item";

class FilterList extends Component {
    render () {
        return (
            <FilterListLayout>
            {
                this.props.items.map( item => (
                    <FilterItem key={item.id} type="firstLevel" name={item.name} children={true}/>
                ))

            }
            </FilterListLayout>
        )
    }
}

export default FilterList