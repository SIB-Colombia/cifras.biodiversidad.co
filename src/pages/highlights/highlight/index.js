import React from 'react'
import { Link } from "react-router-dom";

const Highlight = props => {
    const text = {__html: props.text };
    return (
        <div className={`col-${props.size} ` } >
            <div className={`Highlight ${props.color} ${props.align}`} style={{backgroundImage: `url(${props.background})`}}>
                {/*<Link to={props.link}>*/}
                    <p className="Highlight__text" dangerouslySetInnerHTML={text}></p>
                {/*</Link>*/}
            </div>
        </div>
    )
}

export default Highlight

