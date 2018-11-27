import React, { Component } from 'react'
import FilterListLayout from "./layout";
import FilterItem from "./item";

class FilterList extends Component {
    state = {
        hasChildren: this.props.children
    }

    handleClick = e => {
        console.log(e)
    }

    render () {
        return (
            <FilterListLayout>
                <li className="FilterItem" onClick={this.handleClick} ref={this.myRef}>
                    <p>{this.props.nombre}</p>
                    <ul className="FilterList">
                    {
                        this.state.hasChildren &&
                        this.props.grupoBiologicoHijos.map( item => (
                            <FilterItem key={item.id} {...item} children={item.grupoBiologicoHijos}/>
                        ))
                    }
                    </ul>
                </li>
            </FilterListLayout>
        )
    }
}

export default FilterList