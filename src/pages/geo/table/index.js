import React, { Component } from 'react';
import ReactTable from "react-table";
import TableComponentLayout from "./layout";
import connect from "react-redux/es/connect/connect";


class TableComponent extends Component {
    componentDidUpdate() {

    }

    render() {

        return (
            <TableComponentLayout>
                <ReactTable
                    data={this.props.dataTable}
                    columns={this.props.columns}
                    defaultPageSize={12}
                    showPagination={false}
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

    let columns = [{
        Header: 'Indicador',
        accessor: 'name'
    },{
        Header: 'Registros biológicos',
        columns: [{
            Header: activeTownName,
            accessor: 'RRBBSant'
        },{
            Header: activeDepartmentName,
            accessor: 'RRBBCol'
        }]
    },{
        Header: 'Especies',
        columns: [{
            Header: activeTownName,
            accessor: 'ESPSant'
        },{
            Header: activeDepartmentName,
            accessor: 'ESPCol'
        }]
    }]
    let dataTable = [{
        name: 'Total',
        RRBBSant: activeDataTown ? activeDataTown.registros : 0,
        RRBBCol: activeDataDepartment ? activeDataDepartment.registros : 0,
        ESPSant: activeDataTown ? activeDataTown.especies : 0,
        ESPCol: activeDataDepartment ? activeDataDepartment.especies : 0,
    },
        {
            name: 'Total Amenazadas',
            RRBBSant: activeDataTown ? activeDataTown.registrosAmenaza : 0,
            RRBBCol: activeDataDepartment ? activeDataDepartment.registrosAmenaza : 0,
            ESPSant: activeDataTown ? activeDataTown.especiesAmenaza : 0,
            ESPCol: activeDataDepartment ? activeDataDepartment.especiesAmenaza : 0,
        },
        {
            name: 'En peligro crítico (CR)',
            RRBBSant: activeDataTown ? activeDataTown.registrosCR : 0,
            RRBBCol: activeDataDepartment ? activeDataDepartment.registrosCR : 0,
            ESPSant: activeDataTown ? activeDataTown.especiesCR : 0,
            ESPCol: activeDataDepartment ? activeDataDepartment.especiesCR : 0,
        },
        {
            name: 'En peligro (EN)',
            RRBBSant: activeDataTown ? activeDataTown.registrosEN : 0,
            RRBBCol: activeDataDepartment ? activeDataDepartment.registrosEN : 0,
            ESPSant: activeDataTown ? activeDataTown.especiesEN : 0,
            ESPCol: activeDataDepartment ? activeDataDepartment.especiesEN : 0,
        },
        {
            name: 'Vulnerable (VU)',
            RRBBSant: activeDataTown ? activeDataTown.registrosVU : 0,
            RRBBCol: activeDataDepartment ? activeDataDepartment.registrosVU : 0,
            ESPSant: activeDataTown ? activeDataTown.especiesVU : 0,
            ESPCol: activeDataDepartment ? activeDataDepartment.especiesVU : 0,
        },
        {
            name: 'Total CITES',
            RRBBSant: activeDataTown ? activeDataTown.registrosCites : 0,
            RRBBCol: activeDataDepartment ? activeDataDepartment.registrosCites : 0,
            ESPSant: activeDataTown ? activeDataTown.especiesCites : 0,
            ESPCol: activeDataDepartment ? activeDataDepartment.especiesCites : 0,
        },
        {
            name: 'Apéndice CITES I',
            RRBBSant: activeDataTown ? activeDataTown.registrosCitesI : 0,
            RRBBCol: activeDataDepartment ? activeDataDepartment.registrosCitesI : 0,
            ESPSant: activeDataTown ? activeDataTown.especiesCitesI : 0,
            ESPCol: activeDataDepartment ? activeDataDepartment.especiesCitesI : 0,
        },
        {
            name: 'Apéndice CITES II',
            RRBBSant: activeDataTown ? activeDataTown.registrosCitesII : 0,
            RRBBCol: activeDataDepartment ? activeDataDepartment.registrosCitesII : 0,
            ESPSant: activeDataTown ? activeDataTown.especiesCitesII : 0,
            ESPCol: activeDataDepartment ? activeDataDepartment.especiesCitesII : 0,
        },
        {
            name: 'Apéndice CITES III',
            RRBBSant: activeDataTown ? activeDataTown.registrosCitesIII : 0,
            RRBBCol: activeDataDepartment ? activeDataDepartment.registrosCitesIII : 0,
            ESPSant: activeDataTown ? activeDataTown.especiesCitesIII : 0,
            ESPCol: activeDataDepartment ? activeDataDepartment.especiesCitesIII : 0,
        },

        {
            name: 'Especies Exóticas',
            RRBBSant: activeDataTown ? activeDataTown.registrosExoticas : 0,
            RRBBCol: activeDataDepartment ? activeDataDepartment.registrosExoticas : 0,
            ESPSant: activeDataTown ? activeDataTown.especiesExoticas : 0,
            ESPCol: activeDataDepartment ? activeDataDepartment.especiesExoticas : 0,
        },
        {
            name: 'Especies Endémicas',
            RRBBSant: activeDataTown ? activeDataTown.registrosEndemicas : 0,
            RRBBCol: activeDataDepartment ? activeDataDepartment.registrosEndemicas : 0,
            ESPSant: activeDataTown ? activeDataTown.especiesEndemicas : 0,
            ESPCol: activeDataDepartment ? activeDataDepartment.especiesEndemicas : 0,
        },
        {
            name: 'Especies Migratorias',
            RRBBSant: activeDataTown ? activeDataTown.registrosMigratorias : 0,
            RRBBCol: activeDataDepartment ? activeDataDepartment.registrosMigratorias : 0,
            ESPSant: activeDataTown ? activeDataTown.especiesMigratorias : 0,
            ESPCol: activeDataDepartment ? activeDataDepartment.especiesMigratorias : 0,
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