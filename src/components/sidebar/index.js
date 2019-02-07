import React, {Component, Fragment} from 'react'
import SidebarLayout from "./layout";
import FilterList from "./filterList";
import connect from "react-redux/es/connect/connect";

class Sidebar extends Component {
    componentDidMount () {
    }

    render () {
        return (
            <SidebarLayout>
                <h4>{ this.props.title ? this.props.title : "Filtros"}</h4>
                {
                    this.props.items.map(item => (
                            <Fragment key={item.id}>
                                <FilterList
                                name={item.nombre}
                                children={!!item.grupoBiologicoHijos}
                                urlImagen={item.urlImagen}
                                {...item}
                                />
                            </Fragment>
                    ))
                }
            </SidebarLayout>
        )
    }
}

const mapStateToProps = ( state ) => {
    return (
        {
            items: state.getIn(['interaction', 'sidebar', 'items']),
        }
    )
}

export default connect(mapStateToProps)(Sidebar)