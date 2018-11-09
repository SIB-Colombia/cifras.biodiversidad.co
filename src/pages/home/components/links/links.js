import React from 'react'
import {NavLink} from "react-router-dom";
import "../../../../_styles/components/home-links.scss";

const HomeLinks = props => (
    <div className="container Homelinks">
        <div className="row">
            <div className="col-4">
                <NavLink to="/destacados" activeClassName="is-active" className="HomeLink">
                    Destacados
                </NavLink>
            </div>
            <div className="col-4">
                <NavLink to="/grupos" activeClassName="is-active" className="HomeLink">
                    Grupos
                </NavLink>
            </div>
            <div className="col-4">
                <NavLink to="/municipios" activeClassName="is-active" className="HomeLink">
                    Municipios
                </NavLink>
            </div>
            <div className="col-4">
                <NavLink to="/entidades" activeClassName="is-active" className="HomeLink">
                    Entidades
                </NavLink>
            </div>
        </div>
    </div>
)

export default HomeLinks