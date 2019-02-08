import React, { Component } from 'react';
import ReactTable from "react-table";
import TableComponentLayout from "./layout";
import connect from "react-redux/es/connect/connect";


class TableComponent extends Component {
    componentDidMount() {
    }
    componentDidUpdate() {
    }

    render() {
        const columns = [{
            Header: 'Indicador',
            accessor: 'name'
        },{
            Header: 'Registros biológicos',
            columns: [{
              Header: 'Santander',
              accessor: 'RRBBSant'
            },{
                Header: 'Colombia',
                accessor: 'RRBBCol'
            }]
        },{
            Header: 'Especies',
            columns: [{
                Header: 'Santander',
                accessor: 'ESPSant'
            },{
                Header: 'Colombia',
                accessor: 'ESPCol'
            }]
        }]
        return (
            <TableComponentLayout>
                <ReactTable
                    data={this.props.dataTable}
                    columns={columns}
                    defaultPageSize={12}
                    showPagination={false}
                />
            </TableComponentLayout>
        );
    }
}

const mapStateToProps = state => {
    const activeDataCountry = state.getIn(['data', 'groups', 'active', 'data', 'country', 0])
    const activeDataDepartment = state.getIn(['data', 'groups', 'active', 'data', 'department', 0])


    let dataTable = [{
        name: 'Total',
        RRBBSant: !activeDataDepartment || activeDataDepartment.registros === -1 ? "—" : activeDataDepartment.registros,
        RRBBCol: !activeDataCountry || activeDataCountry.registros === -1 ? "—" : activeDataCountry.registros,
        ESPSant: !activeDataDepartment || activeDataDepartment.especies === -1 ? "—" : activeDataDepartment.especies,
        ESPCol: !activeDataCountry || activeDataCountry.especies === -1 ? "—" : activeDataCountry.especies,
    },
    {
        name: 'Total Amenazadas',
        RRBBSant: !activeDataDepartment || activeDataDepartment.registrosAmenaza === -1 ? "—" : activeDataDepartment.registrosAmenaza,
        RRBBCol: !activeDataCountry || activeDataCountry.registrosAmenaza === -1 ? "—" : activeDataCountry.registrosAmenaza,
        ESPSant: !activeDataDepartment || activeDataDepartment.especiesAmenaza === -1 ? "—" : activeDataDepartment.especiesAmenaza,
        ESPCol: !activeDataCountry || activeDataCountry.especiesAmenaza === -1 ? "—" : activeDataCountry.especiesAmenaza,
    },
    {
        name: 'En peligro crítico (CR)',
        RRBBSant: !activeDataDepartment || activeDataDepartment.registrosCR === -1 ? "—" : activeDataDepartment.registrosCR,
        RRBBCol: !activeDataCountry || activeDataCountry.registrosCR === -1 ? "—" : activeDataCountry.registrosCR,
        ESPSant: !activeDataDepartment || activeDataDepartment.especiesCR === -1 ? "—" : activeDataDepartment.especiesCR,
        ESPCol: !activeDataCountry || activeDataCountry.especiesCR === -1 ? "—" : activeDataCountry.especiesCR,
    },
    {
        name: 'En peligro (EN)',
        RRBBSant: !activeDataDepartment || activeDataDepartment.registrosEN === -1 ? "—" : activeDataDepartment.registrosEN,
        RRBBCol: !activeDataCountry || activeDataCountry.registrosEN === -1 ? "—" : activeDataCountry.registrosEN,
        ESPSant: !activeDataDepartment || activeDataDepartment.especiesEN === -1 ? "—" : activeDataDepartment.especiesEN,
        ESPCol: !activeDataCountry || activeDataCountry.especiesEN === -1 ? "—" : activeDataCountry.especiesEN,
    },
    {
        name: 'Vulnerable (VU)',
        RRBBSant: !activeDataDepartment || activeDataDepartment.registrosVU === -1 ? "—" : activeDataDepartment.registrosVU,
        RRBBCol: !activeDataCountry || activeDataCountry.registrosVU === -1 ? "—" : activeDataCountry.registrosVU,
        ESPSant: !activeDataDepartment || activeDataDepartment.especiesVU === -1 ? "—" : activeDataDepartment.especiesVU,
        ESPCol: !activeDataCountry || activeDataCountry.especiesVU === -1 ? "—" : activeDataCountry.especiesVU,
    },
    {
        name: 'Total CITES',
        RRBBSant: !activeDataDepartment || activeDataDepartment.registrosCites === -1 ? "—" : activeDataDepartment.registrosCites,
        RRBBCol: !activeDataCountry || activeDataCountry.registrosCites === -1 ? "—" : activeDataCountry.registrosCites,
        ESPSant: !activeDataDepartment || activeDataDepartment.especiesCites === -1 ? "—" : activeDataDepartment.especiesCites,
        ESPCol: !activeDataCountry || activeDataCountry.especiesCites === -1 ? "—" : activeDataCountry.especiesCites,
    },
    {
        name: 'Apéndice CITES I',
        RRBBSant: !activeDataDepartment || activeDataDepartment.registrosCitesI === -1 ? "—" : activeDataDepartment.registrosCitesI,
        RRBBCol: !activeDataCountry || activeDataCountry.registrosCitesI === -1 ? "—" : activeDataCountry.registrosCitesI,
        ESPSant: !activeDataDepartment || activeDataDepartment.especiesCitesI === -1 ? "—" : activeDataDepartment.especiesCitesI,
        ESPCol: !activeDataCountry || activeDataCountry.especiesCitesI === -1 ? "—" : activeDataCountry.especiesCitesI,
    },
    {
        name: 'Apéndice CITES II',
        RRBBSant: !activeDataDepartment || activeDataDepartment.registrosCitesII === -1 ? "—" : activeDataDepartment.registrosCitesII,
        RRBBCol: !activeDataCountry || activeDataCountry.registrosCitesII === -1 ? "—" : activeDataCountry.registrosCitesII,
        ESPSant: !activeDataDepartment || activeDataDepartment.especiesCitesII === -1 ? "—" : activeDataDepartment.especiesCitesII,
        ESPCol: !activeDataCountry || activeDataCountry.especiesCitesII === -1 ? "—" : activeDataCountry.especiesCitesII,
    },
    {
        name: 'Apéndice CITES III',
        RRBBSant: !activeDataDepartment || activeDataDepartment.registrosCitesIII === -1 ? "—" : activeDataDepartment.registrosCitesIII,
        RRBBCol: !activeDataCountry || activeDataCountry.registrosCitesIII === -1 ? "—" : activeDataCountry.registrosCitesIII,
        ESPSant: !activeDataDepartment || activeDataDepartment.especiesCitesIII === -1 ? "—" : activeDataDepartment.especiesCitesIII,
        ESPCol: !activeDataCountry || activeDataCountry.especiesCitesIII === -1 ? "—" : activeDataCountry.especiesCitesIII,
    },

    {
        name: 'Especies Exóticas',
        RRBBSant: !activeDataDepartment || activeDataDepartment.registrosExoticas === -1 ? "—" : activeDataDepartment.especiesExoticas,
        RRBBCol: !activeDataCountry || activeDataCountry.registrosExoticas === -1 ? "—" : activeDataCountry.registrosExoticas,
        ESPSant: !activeDataDepartment || activeDataDepartment.especiesExoticas === -1 ? "—" : activeDataDepartment.especiesExoticas,
        ESPCol: !activeDataCountry || activeDataCountry.especiesExoticas === -1 ? "—" : activeDataCountry.especiesExoticas,
    },
    {
        name: 'Especies Endémicas',
        RRBBSant: !activeDataDepartment || activeDataDepartment.registrosEndemicas === -1 ? "—" : activeDataDepartment.registrosEndemicas,
        RRBBCol: !activeDataCountry || activeDataCountry.registrosEndemicas === -1 ? "—" : activeDataCountry.registrosEndemicas,
        ESPSant: !activeDataDepartment || activeDataDepartment.especiesEndemicas === -1 ? "—" : activeDataDepartment.especiesEndemicas,
        ESPCol: !activeDataCountry || activeDataCountry.especiesEndemicas === -1 ? "—" : activeDataCountry.especiesEndemicas,
    },
    {
        name: 'Especies Migratorias',
        RRBBSant: !activeDataDepartment || activeDataDepartment.registrosMigratorias === -1 ? "—" : activeDataDepartment.registrosMigratorias,
        RRBBCol: !activeDataCountry || activeDataCountry.registrosMigratorias === -1 ? "—" : activeDataCountry.registrosMigratorias,
        ESPSant: !activeDataDepartment || activeDataDepartment.especiesMigratorias === -1 ? "—" : activeDataDepartment.especiesMigratorias,
        ESPCol: !activeDataCountry || activeDataCountry.especiesMigratorias === -1 ? "—" : activeDataCountry.especiesMigratorias,
    }]

    return (
        {
            activeDataCountry,
            activeDataDepartment,
            dataTable
        }
    )
}

export default connect(mapStateToProps)(TableComponent)
