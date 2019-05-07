import React, { Component } from 'react';
import ReactTable from "react-table";
import TableComponentLayout from "./layout";
import connect from "react-redux/es/connect/connect";
import NumberFormat from "react-number-format";


class TableComponent extends Component {
    componentDidMount() {
    }
    componentDidUpdate() {
    }

    render() {

        const isMobile = window.innerWidth <= 800 ?  "400px" : "600px"

        return (
            <TableComponentLayout>
                <ReactTable
                    data={this.props.dataTable}
                    columns={this.props.columns}
                    defaultPageSize={12}
                    showPagination={false}
                    style={{
                        height: isMobile
                    }}
                    /*
                    SubComponent={row => {
                        return (
                                <ReactTable
                                    data={this.props.dataTable}
                                    columns={columns}
                                    defaultPageSize={3}
                                    showPagination={false}
                                    style={{
                                        height: "600px"
                                    }}
                                />
                        );
                    }}*/
                />
            </TableComponentLayout>
        );
    }
}

const mapStateToProps = state => {
    const activeDataCountry = state.getIn(['data', 'groups', 'active', 'data', 'country', 0])
    const activeDataDepartment = state.getIn(['data', 'groups', 'active', 'data', 'department', 0])

    let columns = [{
        Header: 'Indicador',
        accessor: 'name',
        width: 200
    },
        {
            Header: 'Especies',
            columns: [
                {
                    Header: 'Santander',
                    accessor: 'ESPSant'
                },
                {
                    Header: 'Colombia',
                    accessor: 'ESPCol'
                }
            ]
        },
        {
            Header: 'Registros biológicos',
            columns: [
                {
                    Header: 'Santander',
                    accessor: 'RRBBSant'
                },
                {
                    Header: 'Colombia',
                    accessor: 'RRBBCol'
                }
            ]
        }
    ]

    let dataTable = [{
        name: 'Total',
        ESPSant: !activeDataDepartment || activeDataDepartment.especies === -1 ? "—" : <NumberFormat value={activeDataDepartment.especies} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        ESPCol: !activeDataCountry || activeDataCountry.especies === -1 ? "—" : <NumberFormat value={activeDataCountry.especies} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        RRBBSant: !activeDataDepartment || activeDataDepartment.registros === -1 ? "—" : <NumberFormat value={activeDataDepartment.registros} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        RRBBCol: !activeDataCountry || activeDataCountry.registros === -1 ? "—" : <NumberFormat value={activeDataCountry.registros} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
    },
    {
        name: 'Total Amenazadas',
        ESPSant: !activeDataDepartment || activeDataDepartment.especiesAmenaza === -1 ? "—" : <NumberFormat value={activeDataDepartment.especiesAmenaza} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        ESPCol: !activeDataCountry || activeDataCountry.especiesAmenaza === -1 ? "—" : <NumberFormat value={activeDataCountry.especiesAmenaza} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        RRBBSant: !activeDataDepartment || activeDataDepartment.registrosAmenaza === -1 ? "—" : <NumberFormat value={activeDataDepartment.registrosAmenaza} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        RRBBCol: !activeDataCountry || activeDataCountry.registrosAmenaza === -1 ? "—" : <NumberFormat value={activeDataCountry.registrosAmenaza} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
    },
    {
        name: 'En peligro crítico (CR)',
        ESPSant: !activeDataDepartment || activeDataDepartment.especiesCR === -1 ? "—" : <NumberFormat value={activeDataDepartment.especiesCR} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        ESPCol: !activeDataCountry || activeDataCountry.especiesCR === -1 ? "—" : <NumberFormat value={activeDataCountry.especiesCR} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        RRBBSant: !activeDataDepartment || activeDataDepartment.registrosCR === -1 ? "—" : <NumberFormat value={activeDataDepartment.registrosCR} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        RRBBCol: !activeDataCountry || activeDataCountry.registrosCR === -1 ? "—" : <NumberFormat value={activeDataCountry.registrosCR} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
    },
    {
        name: 'En peligro (EN)',
        ESPSant: !activeDataDepartment || activeDataDepartment.especiesEN === -1 ? "—" : <NumberFormat value={activeDataDepartment.especiesEN} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        ESPCol: !activeDataCountry || activeDataCountry.especiesEN === -1 ? "—" : <NumberFormat value={activeDataCountry.especiesEN} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        RRBBSant: !activeDataDepartment || activeDataDepartment.registrosEN === -1 ? "—" : <NumberFormat value={activeDataDepartment.registrosEN} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        RRBBCol: !activeDataCountry || activeDataCountry.registrosEN === -1 ? "—" : <NumberFormat value={activeDataCountry.registrosEN} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
    },
    {
        name: 'Vulnerable (VU)',
        ESPSant: !activeDataDepartment || activeDataDepartment.especiesVU === -1 ? "—" : <NumberFormat value={activeDataDepartment.especiesVU} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        ESPCol: !activeDataCountry || activeDataCountry.especiesVU === -1 ? "—" : <NumberFormat value={activeDataCountry.especiesVU} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        RRBBSant: !activeDataDepartment || activeDataDepartment.registrosVU === -1 ? "—" : <NumberFormat value={activeDataDepartment.registrosVU} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        RRBBCol: !activeDataCountry || activeDataCountry.registrosVU === -1 ? "—" : <NumberFormat value={activeDataCountry.registrosVU} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
    },
    {
        name: 'Total CITES',
        ESPSant: !activeDataDepartment || activeDataDepartment.especiesCites === -1 ? "—" : <NumberFormat value={activeDataDepartment.especiesCites} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        ESPCol: !activeDataCountry || activeDataCountry.especiesCites === -1 ? "—" : <NumberFormat value={activeDataCountry.especiesCites} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        RRBBSant: !activeDataDepartment || activeDataDepartment.registrosCites === -1 ? "—" : <NumberFormat value={activeDataDepartment.registrosCites} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        RRBBCol: !activeDataCountry || activeDataCountry.registrosCites === -1 ? "—" : <NumberFormat value={activeDataCountry.registrosCites} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
    },
    {
        name: 'Apéndice CITES I',
        ESPSant: !activeDataDepartment || activeDataDepartment.especiesCitesI === -1 ? "—" : <NumberFormat value={activeDataDepartment.especiesCitesI} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        ESPCol: !activeDataCountry || activeDataCountry.especiesCitesI === -1 ? "—" : <NumberFormat value={activeDataCountry.especiesCitesI} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        RRBBSant: !activeDataDepartment || activeDataDepartment.registrosCitesI === -1 ? "—" : <NumberFormat value={activeDataDepartment.registrosCitesI} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        RRBBCol: !activeDataCountry || activeDataCountry.registrosCitesI === -1 ? "—" : <NumberFormat value={activeDataCountry.registrosCitesI} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
    },
    {
        name: 'Apéndice CITES II',
        ESPSant: !activeDataDepartment || activeDataDepartment.especiesCitesII === -1 ? "—" : <NumberFormat value={activeDataDepartment.especiesCitesII} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        ESPCol: !activeDataCountry || activeDataCountry.especiesCitesII === -1 ? "—" : <NumberFormat value={activeDataCountry.especiesCitesII} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        RRBBSant: !activeDataDepartment || activeDataDepartment.registrosCitesII === -1 ? "—" : <NumberFormat value={activeDataDepartment.registrosCitesII} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        RRBBCol: !activeDataCountry || activeDataCountry.registrosCitesII === -1 ? "—" : <NumberFormat value={activeDataCountry.registrosCitesII} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
    },
    {
        name: 'Apéndice CITES III',
        ESPSant: !activeDataDepartment || activeDataDepartment.especiesCitesIII === -1 ? "—" : <NumberFormat value={activeDataDepartment.especiesCitesIII} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        ESPCol: !activeDataCountry || activeDataCountry.especiesCitesIII === -1 ? "—" : <NumberFormat value={activeDataCountry.especiesCitesIII} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        RRBBSant: !activeDataDepartment || activeDataDepartment.registrosCitesIII === -1 ? "—" : <NumberFormat value={activeDataDepartment.registrosCitesIII} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        RRBBCol: !activeDataCountry || activeDataCountry.registrosCitesIII === -1 ? "—" : <NumberFormat value={activeDataCountry.registrosCitesIII} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
    },

    {
        name: 'Especies Exóticas',
        ESPSant: !activeDataDepartment || activeDataDepartment.especiesExoticas === -1 ? "—" : <NumberFormat value={activeDataDepartment.especiesExoticas} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        ESPCol: !activeDataCountry || activeDataCountry.especiesExoticas === -1 ? "—" : <NumberFormat value={activeDataCountry.especiesExoticas} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        RRBBSant: !activeDataDepartment || activeDataDepartment.registrosExoticas === -1 ? "—" : <NumberFormat value={activeDataDepartment.especiesExoticas} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        RRBBCol: !activeDataCountry || activeDataCountry.registrosExoticas === -1 ? "—" : <NumberFormat value={activeDataCountry.registrosExoticas} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
    },
    {
        name: <div className="Table-tooltip-container">Especies Endémicas <span className="Table-tooltip"><p className="tooltip">Incluye especies de aves, mamíferos,<br/>peces dulceacuícolas, plantas y líquenes</p></span></div>,
        ESPSant: !activeDataDepartment || activeDataDepartment.especiesEndemicas === -1 ? "—" : <NumberFormat value={activeDataDepartment.especiesEndemicas} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        ESPCol: !activeDataCountry || activeDataCountry.especiesEndemicas === -1 ? "—" : <NumberFormat value={activeDataCountry.especiesEndemicas} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        RRBBSant: !activeDataDepartment || activeDataDepartment.registrosEndemicas === -1 ? "—" : <NumberFormat value={activeDataDepartment.registrosEndemicas} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        RRBBCol: !activeDataCountry || activeDataCountry.registrosEndemicas === -1 ? "—" : <NumberFormat value={activeDataCountry.registrosEndemicas} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
    },
    {
        name: <div className="Table-tooltip-container">Especies Migratorias <span className="Table-tooltip"><p className="tooltip">Incluye solo especies de aves</p></span></div>,
        ESPSant: !activeDataDepartment || activeDataDepartment.especiesMigratorias === -1 ? "—" : <NumberFormat value={activeDataDepartment.especiesMigratorias} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        ESPCol: !activeDataCountry || activeDataCountry.especiesMigratorias === -1 ? "—" : <NumberFormat value={activeDataCountry.especiesMigratorias} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        RRBBSant: !activeDataDepartment || activeDataDepartment.registrosMigratorias === -1 ? "—" : <NumberFormat value={activeDataDepartment.registrosMigratorias} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
        RRBBCol: !activeDataCountry || activeDataCountry.registrosMigratorias === -1 ? "—" : <NumberFormat value={activeDataCountry.registrosMigratorias} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />,
    }]

    return (
        {
            activeDataCountry,
            activeDataDepartment,
            dataTable,
            columns
        }
    )
}

export default connect(mapStateToProps)(TableComponent)
