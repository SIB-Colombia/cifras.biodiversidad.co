import React, { Component } from 'react'
import CompanyLayout from "./layout";
import FilterList from "../../../components/sidebar/filterList";

class Company extends Component {
    render () {
        return (
            <CompanyLayout>
                <img className="Company__logo" src="https://s3.amazonaws.com/sib-resources/images/logos-canales/svg/logo-cifras-santander.svg" alt="logo"/>
                <h3 className="Company__title">{this.props.entidadPublicadoraGeografia.entidadPublicadora.nombre}</h3>
                <p className="Company__data">{this.props.registros} <span className="Company__data-label">registros</span></p>
                <p className="Company__data">{this.props.especies} <span className="Company__data-label">Especies</span></p>
                <span className="Company__type">{this.props.entidadPublicadoraGeografia.entidadPublicadora.tipo}</span>
            </CompanyLayout>
        )
    }
}

export default Company