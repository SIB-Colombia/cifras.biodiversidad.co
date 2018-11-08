import React, { Component } from 'react'
import SidebarLayout from "./layout";
import { Link } from 'react-router-dom'

class Sidebar extends Component {
    render () {
        return (
            <SidebarLayout>
                <h3>Categorías</h3>
                {/*<Link
                    to={{
                        pathname: '/groups',
                        search: `?id=${this.props.id}`,
                    }}

                >Animales</Link> */}
                <ul>
                    <li>Animales</li>
                </ul>
            </SidebarLayout>
        )
    }
}

export default Sidebar