import React, { Component } from 'react'
import CompanyLayout from "./layout";
import FilterList from "../../../components/sidebar/filterList";

class Company extends Component {
    render () {
        return (
            <CompanyLayout>
                <div className="col-1">logo</div>
                <div className="col-11">
                    <div className="row">
                       <div className="col-12">
                            <h3>{this.props.entidadPublicadoraGeografia.entidadPublicadora.nombre}</h3>
                            <span>{this.props.entidadPublicadoraGeografia.entidadPublicadora.tipo}</span>
                       </div>
                    </div>
                    <div className="row">
                        <p>registros {this.props.registros}</p>
                        <p>especies {this.props.especies}</p>
                    </div>
                </div>
            </CompanyLayout>
        )
    }
}

export default Company