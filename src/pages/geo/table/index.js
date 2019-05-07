import React, { Component } from 'react';
import ReactTable from "react-table";
import TableComponentLayout from "./layout";
import connect from "react-redux/es/connect/connect";
import NumberFormat from 'react-number-format';


class TableComponent extends Component {
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
                />
            </TableComponentLayout>
        );
    }
}

const mapStateToProps = state => {
    const activeDataTown = state.getIn(['data', 'geo', 'active', 'data', 'town', 0])
    const activeDataDepartment = state.getIn(['data', 'geo', 'active', 'data', 'department', 0])
    const activeTownName =  state.getIn(['data', 'geo', 'active', 'data', 'town', 0, 'geografia', 'nombre'])
    const activeDepartmentName =  state.getIn(['data', 'geo', 'active', 'data', 'department', 0, 'geografia', 'nombre'])

    let columns = [
        {
            Header: 'Indicador',
            accessor: 'name',
            width: 200
        },
        {
            Header: 'Especies',
            columns: [{
                Header: activeTownName,
                accessor: 'ESPSant'
            },{
                Header: activeDepartmentName,
                accessor: 'ESPCol'
            }]
        },
        {
            Header: 'Registros biológicos',
            columns: [{
                Header: activeTownName,
                accessor: 'RRBBSant'
            },{
                Header: activeDepartmentName,
                accessor: 'RRBBCol'
            }]
        }
    ]
    let dataTable = [{
        name: 'Total',
        ESPSant: activeDataTown ? <NumberFormat value={activeDataTown.especies} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
        ESPCol: activeDataDepartment ? <NumberFormat value={activeDataDepartment.especies} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
        RRBBSant: activeDataTown ? <NumberFormat value={activeDataTown.registros} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
        RRBBCol: activeDataDepartment ? <NumberFormat value={activeDataDepartment.registros} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
    },
        {
            name: 'Total Amenazadas',
            ESPSant: activeDataTown ? <NumberFormat value={activeDataTown.especiesAmenaza} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            ESPCol: activeDataDepartment ? <NumberFormat value={activeDataDepartment.especiesAmenaza} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            RRBBSant: activeDataTown ? <NumberFormat value={activeDataTown.registrosAmenaza} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            RRBBCol: activeDataDepartment ? <NumberFormat value={activeDataDepartment.registrosAmenaza} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
        },
        {
            name: 'En peligro crítico (CR)',
            ESPSant: activeDataTown ? <NumberFormat value={activeDataTown.especiesCR} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            ESPCol: activeDataDepartment ? <NumberFormat value={activeDataDepartment.especiesCR} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            RRBBSant: activeDataTown ? <NumberFormat value={activeDataTown.registrosCR} thousandSeparator='.' decimalSeparator=','  displayType={'text'} />: 0,
            RRBBCol: activeDataDepartment ? <NumberFormat value={activeDataDepartment.registrosCR} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
        },
        {
            name: 'En peligro (EN)',
            ESPSant: activeDataTown ? <NumberFormat value={activeDataTown.especiesEN} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            ESPCol: activeDataDepartment ? <NumberFormat value={activeDataDepartment.especiesEN} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            RRBBSant: activeDataTown ? <NumberFormat value={activeDataTown.registrosEN} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            RRBBCol: activeDataDepartment ? <NumberFormat value={activeDataDepartment.registrosEN} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
        },
        {
            name: 'Vulnerable (VU)',
            ESPSant: activeDataTown ? <NumberFormat value={activeDataTown.especiesVU} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            ESPCol: activeDataDepartment ? <NumberFormat value={activeDataDepartment.especiesVU} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            RRBBSant: activeDataTown ? <NumberFormat value={activeDataTown.registrosVU} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            RRBBCol: activeDataDepartment ? <NumberFormat value={activeDataDepartment.registrosVU} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
        },
        {
            name: 'Total CITES',
            ESPSant: activeDataTown ? <NumberFormat value={activeDataTown.especiesCites} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            ESPCol: activeDataDepartment ? <NumberFormat value={activeDataDepartment.especiesCites} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            RRBBSant: activeDataTown ? <NumberFormat value={activeDataTown.registrosCites} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            RRBBCol: activeDataDepartment ? <NumberFormat value={activeDataDepartment.registrosCites} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
        },
        {
            name: 'Apéndice CITES I',
            ESPSant: activeDataTown ? <NumberFormat value={activeDataTown.especiesCitesI} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            ESPCol: activeDataDepartment ? <NumberFormat value={activeDataDepartment.especiesCitesI} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            RRBBSant: activeDataTown ? <NumberFormat value={activeDataTown.registrosCitesI} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            RRBBCol: activeDataDepartment ? <NumberFormat value={activeDataDepartment.registrosCitesI} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
        },
        {
            name: 'Apéndice CITES II',
            ESPSant: activeDataTown ? <NumberFormat value={activeDataTown.especiesCitesII} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            ESPCol: activeDataDepartment ? <NumberFormat value={activeDataDepartment.especiesCitesII} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            RRBBSant: activeDataTown ? <NumberFormat value={activeDataTown.registrosCitesII} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            RRBBCol: activeDataDepartment ? <NumberFormat value={activeDataDepartment.registrosCitesII} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
        },
        {
            name: 'Apéndice CITES III',
            ESPSant: activeDataTown ? <NumberFormat value={activeDataTown.especiesCitesIII} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            ESPCol: activeDataDepartment ? <NumberFormat value={activeDataDepartment.especiesCitesIII} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            RRBBSant: activeDataTown ? <NumberFormat value={activeDataTown.registrosCitesIII} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            RRBBCol: activeDataDepartment ? <NumberFormat value={activeDataDepartment.registrosCitesIII} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
        },

        {
            name: <div className="Table-tooltip-container">Expecies Exóticas <span className="Table-tooltip"><p className="tooltip">Incluye solo especies de animales</p></span></div>,
            ESPSant: activeDataTown ? <NumberFormat value={activeDataTown.especiesExoticas} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            ESPCol: activeDataDepartment ? <NumberFormat value={activeDataDepartment.especiesExoticas} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            RRBBSant: activeDataTown ? <NumberFormat value={activeDataTown.registrosExoticas} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            RRBBCol: activeDataDepartment ? <NumberFormat value={activeDataDepartment.registrosExoticas} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
        },
        {
            name: <div className="Table-tooltip-container">Expecies Endémicas <span className="Table-tooltip"><p className="tooltip">Incluye especies de aves, mamíferos,<br/>peces dulceacuícolas, plantas y líquenes</p></span></div>,
            ESPSant: activeDataTown ? <NumberFormat value={activeDataTown.especiesEndemicas} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            ESPCol: activeDataDepartment ? <NumberFormat value={activeDataDepartment.especiesEndemicas} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            RRBBSant: activeDataTown ? <NumberFormat value={activeDataTown.registrosEndemicas} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            RRBBCol: activeDataDepartment ? <NumberFormat value={activeDataDepartment.registrosEndemicas} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
        },
        {
            name: <div className="Table-tooltip-container">Expecies Migratorias <span className="Table-tooltip"><p className="tooltip">Incluye solo especies de aves</p></span></div>,
            ESPSant: activeDataTown ? <NumberFormat value={activeDataTown.especiesMigratorias} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            ESPCol: activeDataDepartment ? <NumberFormat value={activeDataDepartment.especiesMigratorias} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            RRBBSant: activeDataTown ? <NumberFormat value={activeDataTown.registrosMigratorias} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
            RRBBCol: activeDataDepartment ? <NumberFormat value={activeDataDepartment.registrosMigratorias} thousandSeparator='.' decimalSeparator=','  displayType={'text'} /> : 0,
        }]

    return (
        {
            dataTable,
            columns
        }
    )
}

export default connect(mapStateToProps)(TableComponent)

/*

const columns = [{
    Header: 'Indicador',
    accessor: 'name' // String-based value accessors!
}, {
    Header: 'RRBB Sant',
    accessor: 'age',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
}, {
    id: 'friendName', // Required because our accessor is not a string
    Header: 'Friend Name',
    accessor: d => d.friend.name // Custom value accessors!
}, {
    Header: props => <span>Friend Age</span>, // Custom header components!
    accessor: 'friend.age'
}]

*/