import React, {Component, Fragment} from 'react'
import FilterList from "../index";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import * as actions from "../../../../actions";
import connect from "react-redux/es/connect/connect";

class FilterItem extends Component {
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
        this.props.actions.setActiveGroupImage(this.props.urlImagen)
    }

    render () {
        return (
            <li
                className={`FilterItem ${this.props.aplica === true ? ``: `hidden` }`}
                onClick={this.handleClick}
                ref={this.setRef}
                key={this.props.id}
            >
                <Link to={`?name=${this.props.nombre}&id=${this.props.id}`}>{this.props.nombre}</Link>
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


const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
)


export default connect(null, mapDispatchToProps)(FilterItem)