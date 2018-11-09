import React from 'react'
import "../../_styles/components/navbar.scss"

const NavbarLayout = props => (
    <nav className="Navbar">
        {props.children}
    </nav>
)

export default NavbarLayout