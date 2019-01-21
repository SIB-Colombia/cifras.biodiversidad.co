import React, { Component } from 'react';
import ReactTable from "react-table";
import TableComponentLayout from "./layout";
import connect from "react-redux/es/connect/connect";


class TableComponent extends Component {
    state = {
        stateData: 0
    }
    componentDidUpdate() {
        this.setState({
            stateData: 100,
        })

    }

    render() {
        const data = [{
            name: 'Registros',
            RRBBSant: this.state.stateData,
            RRBBCol: 5231819,
            ESPSant: 9563,
            ESPCol: 62829,
        },{
            name: 'Especies Amenazadas',
            RRBBSant: 12489,
            RRBBCol: 54654,
            ESPSant: 95643,
            ESPCol: 629,
        },,{
            name: 'Especies CITES',
            RRBBSant: 1489,
            RRBBCol: 5239,
            ESPSant: 9563,
            ESPCol: 622,
        },,{
            name: 'Especies Exóticas',
            RRBBSant: 1489,
            RRBBCol: 31819,
            ESPSant: 953,
            ESPCol: 62,
        },,{
            name: 'Especies Endémicas',
            RRBBSant: 8979,
            RRBBCol: 564,
            ESPSant: 54,
            ESPCol: 56465,
        },,{
            name: 'Especies Migratorias',
            RRBBSant: 564,
            RRBBCol: 2541,
            ESPSant: 657,
            ESPCol: 5467,
        },]


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
                    data={data}
                    columns={columns}
                    defaultPageSize={10}
                />
            </TableComponentLayout>
        );
    }
}

const mapStateToProps = state => (
    {
        sidebarVisible: state.getIn(['interaction', 'sidebar', 'active']),
        activeData: state.getIn(['data', 'groups', 'active', 'active'])

    }
)

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