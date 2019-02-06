import React from 'react'
import { Link } from "react-router-dom";

const Highlight = props => (
    <div className={`Hightlight col-${props.size} ${props.color} ${props.align}` } style={{background: `url(${props.background})`}}>
        <Link to={props.link}>
            <h2 className="Hightlight__number">{props.number}</h2>
            <p className="Hightlight__title">{props.title}</p>
            <p className="Hightlight__text">{props.text}</p>
        </Link>
    </div>
)

export default Highlight

