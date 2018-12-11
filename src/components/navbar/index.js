import React, { Component } from 'react'
import NavbarLayout from "./layout";
import Menu from "./menu";
import { Link } from "react-router-dom"
import ToggleSidebar from "./toggleSidebar";
import { connect }  from "react-redux";
import * as actions from "../../actions";
import { bindActionCreators } from 'redux'

class Navbar extends Component {
    state = {
        menuVisible: this.props.toggleVisible,
        sidebarVisible: this.props.sidebarVisible
    }
    handleToggleMainMenu = e => {
        this.setState({
            menuVisible: !this.state.menuVisible,
        })
    }
    handleSidebar = e => {
        this.props.actions.sidebarVisibility(!this.props.sidebarVisible)
    }

    render () {
        return (
            <NavbarLayout>
                {
                    this.props.toggleVisible &&
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
        toggleVisible: state.get('data').get('interaction').get('buttonSidebar'),
        sidebarVisible: state.interaction.sidebar
    }
)

const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)