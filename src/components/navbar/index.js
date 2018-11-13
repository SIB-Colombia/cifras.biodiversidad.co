import React, { Component } from 'react'
import NavbarLayout from "./layout";
import Menu from "./menu";

class Navbar extends Component {
    render () {
        return (
            <NavbarLayout>
                {/* <div id="toggleSideBar">
                    -
                </div>*/}
                <img src="../../../images/logos/logo-cifras-santander.svg" alt="Logo Biodiversidad en cifras - Santander"/>


                {/*<Menu/>*/}

            </NavbarLayout>
        )
    }
}

export default Navbar