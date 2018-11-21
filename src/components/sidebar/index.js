import React, {Component, Fragment} from 'react'
import SidebarLayout from "./layout";
import FilterList from "./filterList";

class Sidebar extends Component {
    render () {
        return (
            <SidebarLayout>
                <h3>Sidebar</h3>
                {
                    this.props.groups.map( item => (
                        <Fragment key={item.id}>
                            <FilterList name={item.nombre} {...item} children={true}/>
                        </Fragment>
                    ))
                }
            </SidebarLayout>
        )
    }
}

export default Sidebar