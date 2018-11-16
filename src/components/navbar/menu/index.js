import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../../../_styles/components/menu.scss"

const Menu = props => (
    <div className="MainMenu">
        <ul>
            {
                props.items.length &&
                props.items.map( item => (
                    <li className="MainMenu__item" key={item.id} onClick={props.handleClick}>
                        <NavLink exact to={item.url} activeClassName="is-active">
                            {item.title}
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    </div>
);

export default Menu