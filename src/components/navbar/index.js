import React, { Component } from 'react'
import NavbarLayout from "./layout";
import Menu from "./menu";
import { connect }  from "react-redux";
import { Link } from "react-router-dom"

class Navbar extends Component {
    state = {
        menuVisible: false
    }
    handleToggleMainMenu = e => {
        this.setState({
            menuVisible: !this.state.menuVisible,
        })
        /*this.props.dispatch({
            type: 'TOOGLE_MENU',
        })*/
    }
    render () {
        return (
            <NavbarLayout>
                {/* <div id="toggleSideBar">
                    -
                </div>*/}
                <Link to="/">
                    <img src="../../../images/logos/logo-cifras-santander.svg" alt="Logo Biodiversidad en cifras - Santander"/>
                </Link>

                <p onClick={this.handleToggleMainMenu}>EXPLORAR</p>

                {
                    this.state.menuVisible &&
                    <Menu items={this.props.items} handleClick={this.handleToggleMainMenu}/>
                }
            </NavbarLayout>
        )
    }
}

const mapStateToProps = (state, props) => (
    {
        items: state.data.sections
    }
)

export default connect(mapStateToProps)(Navbar)