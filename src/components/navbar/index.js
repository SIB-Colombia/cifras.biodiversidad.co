import React, { Component } from 'react'
import NavbarLayout from "./layout";
import Menu from "./menu";
import { Link } from "react-router-dom"
import ToggleSidebar from "./toggleSidebar";
import { connect }  from "react-redux";

class Navbar extends Component {
    state = {
        menuVisible: this.props.togglevisible,
    }
    handleToggleMainMenu = e => {
        this.setState({
            menuVisible: !this.state.menuVisible,
        })
    }
    handleButtonSidebar = e => {
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
                {
                    this.props.togglevisible &&
                    <ToggleSidebar /*handleClick={this.handleButtonSidebar}*/ />
                }

                {/* TODO: convertir logo en componente */}
                <div className="HeaderLogo">
                    <Link to="/">
                        <img src="../../../images/logos/logo-cifras-santander.svg" alt="Logo Biodiversidad en cifras - Santander"/>
                    </Link>
                </div>

                <p onClick={this.handleToggleMainMenu} className="ToggleMainMenu">EXPLORAR</p>
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
        items: state.data.sections,
        togglevisible: state.sidebarVisibility.button,
        sidebarVisible: state.sidebarVisibility.sidebar
    }
)



export default connect(mapStateToProps)(Navbar)