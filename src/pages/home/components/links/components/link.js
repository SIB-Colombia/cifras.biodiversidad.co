import React from "react";
import {NavLink} from "react-router-dom";

const HomeLink = props => (
    <NavLink to="/destacados" activeClassName="is-active" className="HomeLink">
        <span className="HomeLink__title">Destacados</span>
        <span className="HomeLink__action">Entrar</span>
    </NavLink>
)

export default HomeLink