import React, { Component } from 'react'
import FilterListLayout from "./layout";
import FilterItem from "./item";
import {Link} from "react-router-dom";

class FilterList extends Component {
    state = {
        hasChildren: this.props.children,
        showChildren: false
    }

    setRef = e => {
        this.item = e
    }

    handleClick = e => {
        console.log(this.item)
        e.stopPropagation();
        this.setState({
            showChildren: !this.state.showChildren,
        })
    }

    render () {
        return (
            <FilterListLayout>
                <li
                    className="FilterItem"
                    onClick={this.handleClick}
                    ref={this.setRef}
                    key={this.props.id}
                >
                    <Link to={`?grupo=${this.props.nombre}`}>{this.props.nombre}</Link>


                    {
                        this.state.showChildren &&
                        <ul className="FilterList">
                            {
                                this.state.hasChildren &&
                                    this.props.grupoBiologicoHijos.map( item => (
                                        <FilterItem key={item.id} {...item} children={item.grupoBiologicoHijos}/>
                                    ))
                            }
                        </ul>
                    }
                </li>
            </FilterListLayout>
        )
    }
}

export default FilterList