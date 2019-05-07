import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../../../_styles/components/menu.scss"

const Menu = props => (
    <div
        className="MainMenu"
        onMouseLeave={props.handleClick}
    >
        <ul>
            {
                props.items.map( item => (
                    <li className="MainMenu__item" key={item.get('id')} onClick={props.handleClick}>
                        <NavLink exact to={item.get('url')} activeClassName="is-active">
                            {item.get('title')}
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    </div>
);

export default Menu