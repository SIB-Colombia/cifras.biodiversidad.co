import React, { Component } from 'react'
import CompaniesLayout from "./layout";
import Sidebar from "../../components/sidebar";

class Companies extends Component {
    render() {
        return (
            <CompaniesLayout>
                <Sidebar/>
                <p>Entidades</p>
            </CompaniesLayout>
        )
    }
}

export default Companies