import React, { Component } from 'react'
import NavbarLayout from "./layout";
import Menu from "./menu";
import { Link } from "react-router-dom"
import ToggleSidebar from "./toggleSidebar";
import { connect }  from "react-redux";
import GroupsList from "../../services/groups-list";
import Provider from "react-redux/es/components/Provider";

class Navbar extends Component {
    state = {
        menuVisible: this.props.togglevisible,
        sidebarVisible: this.props.sidebarVisible
    }
    handleToggleMainMenu = e => {
        this.setState({
            menuVisible: !this.state.menuVisible,
        })
    }
    handleSidebar = e => {
        this.props.dispatch({
            type: 'SIDEBAR_VISIBILITY',
            payload: {
                sidebarVisible: !this.props.sidebarVisible
            }
        })
    }


    render () {
        return (
            <NavbarLayout>

                {
                    this.props.togglevisible &&
                    <ToggleSidebar handleClick={this.handleSidebar} />
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
        togglevisible: state.interaction.buttonSidebar,
        sidebarVisible: state.interaction.sidebar
    }
)



export default connect(mapStateToProps)(Navbar)