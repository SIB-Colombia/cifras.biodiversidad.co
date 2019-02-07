import React, { Component } from 'react'
import FilterListLayout from "./layout";
import FilterItem from "./item";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import * as actions from "../../../actions";
import connect from "react-redux/es/connect/connect";

class FilterList extends Component {
    state = {
        hasChildren: this.props.children,
        showChildren: false
    }

    setRef = e => {
        this.item = e
    }

    handleClick = e => {
        e.stopPropagation();
        this.setState({
            showChildren: !this.state.showChildren,
        })
        if (this.props.urlImagen) {
            this.props.actions.setActiveGroupImage(this.props.urlImagen)
        }
    }

    render () {
        return (
            <FilterListLayout>
                <li
                    className={`FilterItem ${this.props.aplica === false ? `hidden`: `` }`}
                    onClick={this.handleClick}
                    ref={this.setRef}
                    key={this.props.id}
                >
                    <Link to={`?name=${this.props.nombre}&id=${this.props.id}`}>{this.props.nombre.toLowerCase()}</Link>
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

const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
)

export default connect(null, mapDispatchToProps)(FilterList)