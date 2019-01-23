import React, { Component } from 'react';
import ReactTable from "react-table";
import TableComponentLayout from "./layout";
import connect from "react-redux/es/connect/connect";


class TableComponent extends Component {
    componentDidUpdate() {

    }

    render() {
        const columns = [{
            Header: 'Indicador',
            accessor: 'name'
        }, {
            Header: 'RRBB Sant',
            accessor: 'RRBBSant',
        },{
            Header: 'RRBB COL',
            accessor: 'RRBBCol',
        },{
            Header: 'Especies Sant',
            accessor: 'ESPSant',
        },{
            Header: 'Especies COL',
            accessor: 'ESPCol',
        }]
        return (
            <TableComponentLayout>
                <ReactTable
                    data={this.props.dataTable}
                    columns={columns}
                    defaultPageSize={10}
                />
            </TableComponentLayout>
        );
    }
}

const mapStateToProps = state => {
    const activeDataCountry = state.getIn(['data', 'groups', 'active', 'data', 'country', 0])
    const activeDataDepartment = state.getIn(['data', 'groups', 'active', 'data', 'department', 1])
    let dataTable = [{
        name: 'Registros',
        RRBBSant: activeDataDepartment ? activeDataDepartment.registros : 0,
        RRBBCol: activeDataCountry ? activeDataCountry.registros : 0,
        ESPSant: 1234,
        ESPCol: 62829,
    }, {
        name: 'Especies Amenazadas',
        RRBBSant: 12489,
        RRBBCol: 54654,
        ESPSant: 95643,
        ESPCol: 629,
    }, {
        name: 'Especies CITES',
        RRBBSant: 1489,
        RRBBCol: 5239,
        ESPSant: 9563,
        ESPCol: 622,
    }, {
        name: 'Especies Exóticas',
        RRBBSant: 1489,
        RRBBCol: 31819,
        ESPSant: 953,
        ESPCol: 62,
    }, {
        name: 'Especies Endémicas',
        RRBBSant: 8979,
        RRBBCol: 564,
        ESPSant: 54,
        ESPCol: 56465,
    }, {
        name: 'Especies Migratorias',
        RRBBSant: 564,
        RRBBCol: 2541,
        ESPSant: 657,
        ESPCol: 5467,
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