import React, {Component, Fragment} from 'react'
import FilterList from "../index";

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
                <p>{this.props.nombre}</p>
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


/*
                                    console.log("PROPS ITEM", item, this.state.hasChildren)



*/