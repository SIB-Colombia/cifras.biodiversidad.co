import React from 'react'
import {Link} from "react-router-dom";

const Highlight = props => (
    <div className={`Hightlight col-${props.size} ${props.color}` }>
        <Link to={props.link}>
            <h2>{props.number}</h2>
            <p>{props.title}</p>
            <p>{props.text}</p>
        </Link>
    </div>
)

export default Highlight
