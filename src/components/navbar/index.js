import React, { Component } from 'react'
import NavbarLayout from "./layout";
import Menu from "./menu";
import { Link } from "react-router-dom"
import ToggleSidebar from "./toggleSidebar";
import { connect }  from "react-redux";

class Navbar extends Component {
    state = {
        menuVisible: false,
        sidebarVisible: true
    }
    handleToggleMainMenu = e => {
        console.log(this.state)
        this.setState({
            menuVisible: !this.state.menuVisible,
        })
    }
    handleToggleSidebar = e => {
        this.setState({
            sidebarVisible: !this.state.menuVisible,
        })
        this.props.dispatch({
            type: 'TOOGLE_SIDEBAR',
            payload: {
                sidebarVisible: !this.state.menuVisible
            }
        })
    }


    render () {
        return (
            <NavbarLayout>
               <ToggleSidebar handleClick={this.handleToggleSidebar}/>
                {/* TODO: convertir logo en componente */}
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