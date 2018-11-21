import React, { Component } from 'react'
import FilterList from "../index";

class FilterItem extends Component {
    state = {
        hasChildren: this.props.children
    }

    render () {
        return (

                    <li>
                        <p>{this.props.nombre}</p>
                        {
                            this.state.hasChildren &&

                                this.props.grupoBiologicoHijos.map(item => (
                                    <FilterList key={item.id} {...item} children={item.grupoBiologicoHijos}/>
                                ))

                        }
                    </li>
        )
    }
}

export default FilterItem


/*
                                    console.log("PROPS ITEM", item, this.state.hasChildren)



*/