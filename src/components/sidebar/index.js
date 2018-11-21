import React, {Component, Fragment} from 'react'
import SidebarLayout from "./layout";
import FilterList from "./filterList";

class Sidebar extends Component {
    render () {
        return (
            <SidebarLayout>
                <h3>Sidebar</h3>
                {
                    this.props.list.map( item => (
                        <Fragment key={item.id}>
                            <p>{item.name}</p>
                            <FilterList  items={[{"id":"3","name": "peces"}, {"id":"4","name": "perros"}]} />
                        </Fragment>
                    ))
                }
            </SidebarLayout>
        )
    }
}

export default Sidebar