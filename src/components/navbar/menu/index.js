import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

class Menu extends Component {
    render () {
        return (
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="is-active">
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/destacados" activeClassName="is-active">
                        Destacados
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/grupos" activeClassName="is-active">
                        Grupos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/municipios" activeClassName="is-active">
                        Municipios
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/entidades" activeClassName="is-active">
                        Entidades
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/g" activeClassName="is-active">
                        g
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/NotFound" activeClassName="is-active">
                        NotFound
                    </NavLink>
                </li>
            </ul>
        )
    }
}

export default Menu