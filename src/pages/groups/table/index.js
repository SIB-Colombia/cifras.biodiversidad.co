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
        }, {
            Header: 'Registros biológicos Santander',
            accessor: 'RRBBSant',
        },{
            Header: 'Registros biológicos Colombia',
            accessor: 'RRBBCol',
        },{
            Header: 'Especies Santander',
            accessor: 'ESPSant',
        },{
            Header: 'Especies Colombia',
            accessor: 'ESPCol',
        }]
        return (
            <TableComponentLayout>
                <ReactTable
                    data={this.props.dataTable}
                    columns={columns}
                    defaultPageSize={12}
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
        RRBBSant: activeDataDepartment ? activeDataDepartment.registros : 0,
        RRBBCol: activeDataCountry ? activeDataCountry.registros : 0,
        ESPSant: activeDataDepartment ? activeDataDepartment.especies : 0,
        ESPCol: activeDataCountry ? activeDataCountry.especies : 0,
    },
    {
        name: 'Total Amenazadas',
        RRBBSant: activeDataDepartment ? activeDataDepartment.registrosAmenaza : 0,
        RRBBCol: activeDataCountry ? activeDataCountry.registrosAmenaza : 0,
        ESPSant: activeDataDepartment ? activeDataDepartment.especiesAmenaza : 0,
        ESPCol: activeDataCountry ? activeDataCountry.especiesAmenaza : 0,
    },
    {
        name: 'Amenazadas CR',
        RRBBSant: activeDataDepartment ? activeDataDepartment.registrosCR : 0,
        RRBBCol: activeDataCountry ? activeDataCountry.registrosCR : 0,
        ESPSant: activeDataDepartment ? activeDataDepartment.especiesCR : 0,
        ESPCol: activeDataCountry ? activeDataCountry.especiesCR : 0,
    },
    {
        name: 'Amenazadas EN',
        RRBBSant: activeDataDepartment ? activeDataDepartment.registrosEN : 0,
        RRBBCol: activeDataCountry ? activeDataCountry.registrosEN : 0,
        ESPSant: activeDataDepartment ? activeDataDepartment.especiesEN : 0,
        ESPCol: activeDataCountry ? activeDataCountry.especiesEN : 0,
    },
    {
        name: 'Amenazadas VU',
        RRBBSant: activeDataDepartment ? activeDataDepartment.registrosVU : 0,
        RRBBCol: activeDataCountry ? activeDataCountry.registrosVU : 0,
        ESPSant: activeDataDepartment ? activeDataDepartment.especiesVU : 0,
        ESPCol: activeDataCountry ? activeDataCountry.especiesVU : 0,
    },
    {
        name: 'Total CITES',
        RRBBSant: activeDataDepartment ? activeDataDepartment.registrosCites : 0,
        RRBBCol: activeDataCountry ? activeDataCountry.registrosCites : 0,
        ESPSant: activeDataDepartment ? activeDataDepartment.especiesCites : 0,
        ESPCol: activeDataCountry ? activeDataCountry.especiesCites : 0,
    },
    {
        name: 'CITES I',
        RRBBSant: activeDataDepartment ? activeDataDepartment.registrosCitesI : 0,
        RRBBCol: activeDataCountry ? activeDataCountry.registrosCitesI : 0,
        ESPSant: activeDataDepartment ? activeDataDepartment.especiesCitesI : 0,
        ESPCol: activeDataCountry ? activeDataCountry.especiesCitesI : 0,
    },
    {
        name: 'CITES II',
        RRBBSant: activeDataDepartment ? activeDataDepartment.registrosCitesII : 0,
        RRBBCol: activeDataCountry ? activeDataCountry.registrosCitesII : 0,
        ESPSant: activeDataDepartment ? activeDataDepartment.especiesCitesII : 0,
        ESPCol: activeDataCountry ? activeDataCountry.especiesCitesII : 0,
    },
    {
        name: 'CITES III',
        RRBBSant: activeDataDepartment ? activeDataDepartment.registrosCitesIII : 0,
        RRBBCol: activeDataCountry ? activeDataCountry.registrosCitesIII : 0,
        ESPSant: activeDataDepartment ? activeDataDepartment.especiesCitesIII : 0,
        ESPCol: activeDataCountry ? activeDataCountry.especiesCitesIII : 0,
    },

    {
        name: 'Especies Exóticas',
        RRBBSant: activeDataDepartment ? activeDataDepartment.registrosExoticas : 0,
        RRBBCol: activeDataCountry ? activeDataCountry.registrosExoticas : 0,
        ESPSant: activeDataDepartment ? activeDataDepartment.especiesExoticas : 0,
        ESPCol: activeDataCountry ? activeDataCountry.especiesExoticas : 0,
    },
    {
        name: 'Especies Endémicas',
        RRBBSant: activeDataDepartment ? activeDataDepartment.registrosEndemicas : 0,
        RRBBCol: activeDataCountry ? activeDataCountry.registrosEndemicas : 0,
        ESPSant: activeDataDepartment ? activeDataDepartment.especiesEndemicas : 0,
        ESPCol: activeDataCountry ? activeDataCountry.especiesEndemicas : 0,
    },
    {
        name: 'Especies Migratorias',
        RRBBSant: activeDataDepartment ? activeDataDepartment.registrosMigratorias : 0,
        RRBBCol: activeDataCountry ? activeDataCountry.registrosMigratorias : 0,
        ESPSant: activeDataDepartment ? activeDataDepartment.especiesMigratorias : 0,
        ESPCol: activeDataCountry ? activeDataCountry.especiesMigratorias : 0,
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