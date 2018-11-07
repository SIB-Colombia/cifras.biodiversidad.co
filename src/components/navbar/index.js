import React, { Component } from 'react'
import NavbarLayout from "./layout";
import Menu from "./Menu";

class Navbar extends Component {
    render () {
        return (
            <NavbarLayout>

                <img src="" alt="Logo Biodiversidad en cifras - Santander"/>
                <Menu/>
            </NavbarLayout>
        )
    }
}

export default Navbar