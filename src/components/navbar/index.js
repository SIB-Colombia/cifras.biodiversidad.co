import React, { Component } from 'react'
import NavbarLayout from "./layout";
import Menu from "./menu";
import { Link } from "react-router-dom"
import ToggleSidebar from "./toggleSidebar";
import { connect }  from "react-redux";
import * as actions from "../../actions";
import { bindActionCreators } from 'redux'

class Navbar extends Component {
    handleToggleMainMenu = e => {
        this.props.actions.menuVisibility(!this.props.menuVisible)

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
                        <img src="https://s3.amazonaws.com/sib-resources/images/logos-canales/svg/logo-cifras-santander.svg" alt="Logo Biodiversidad en cifras - Santander"/>
                    </Link>
                </div>
                <p onClick={this.handleToggleMainMenu} className="ToggleMainMenu">EXPLORAR</p>
                {
                    this.props.menuVisible &&
                    <Menu items={this.props.items} handleClick={this.handleToggleMainMenu}/>
                }
            </NavbarLayout>
        )
    }
}

const mapStateToProps = (state, props) => (
    {
        items: state.getIn(['data', 'sections']),
        toggleVisible: state.getIn(['interaction', 'sidebar', 'button']),
        sidebarVisible: state.getIn(['interaction', 'sidebar', 'active']),
        menuVisible: state.getIn(['interaction', 'menu'])
    }
)

const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)