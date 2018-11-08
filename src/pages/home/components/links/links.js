import React from 'react'
import {NavLink} from "react-router-dom";

const HomeLinks = props => (
    <ul>
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
    </ul>
)

export default HomeLinks