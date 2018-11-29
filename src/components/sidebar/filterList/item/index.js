import React, {Component, Fragment} from 'react'
import FilterList from "../index";
import {Link} from "react-router-dom";

class FilterItem extends Component {
    state = {
        hasChildren: this.props.children,
        showChildren: false
    }
    setRef = e => {
        this.item = e
    }

    handleClick = e => {
        console.log(this.item)
        {console.log(this.props)}

        e.stopPropagation();
        this.setState({
            showChildren: !this.state.showChildren,
        })
    }

    render () {
        return (
            <li
                className="FilterItem"
                onClick={this.handleClick}
                ref={this.setRef}
                key={this.props.id}
            >
                <Link to={`?grupo=${this.props.nombre}`}>{this.props.nombre}</Link>
                {
                    this.state.showChildren &&
                    <Fragment>
                        {
                            this.state.hasChildren &&
                            this.props.grupoBiologicoHijos.map(item => (
                                <FilterList key={item.id} {...item} children={item.grupoBiologicoHijos}/>
                            ))

                        }
                    </Fragment>
                }
            </li>
        )
    }
}

export default FilterItem