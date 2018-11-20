import React, { Component } from 'react'
import FilterListLayout from "./layout";
import FilterItem from "./item";

class FilterList extends Component {
    render () {
        return (
            <FilterListLayout>
                {/*loop para iterar sobre los items*/}
                <FilterItem type="firstLevel" text="hola"/>
            </FilterListLayout>
        )
    }
}

export default FilterList