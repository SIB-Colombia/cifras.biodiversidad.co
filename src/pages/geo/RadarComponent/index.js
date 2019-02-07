import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';
import connect from "react-redux/es/connect/connect";



class GeoRadarComponent extends Component {

    render() {
        return (
            <div>
                <Radar
                    data={this.props.radarData}
                    height={350}
                    options={{
                        legend: {
                            position: "bottom"
                        }
                    }}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const activeDataDepartment = state.getIn(['data', 'groups', 'active', 'data', 'department', 0])
    const activeDataTown = state.getIn(['data', 'groups', 'active', 'data', 'department', 0])

    let countryDataToRender = [
        activeDataDepartment ? activeDataDepartment.especiesAmenaza : 0,
        activeDataDepartment ? activeDataDepartment.especiesCites : 0,
        activeDataDepartment ? activeDataDepartment.especiesEndemicas : 0,
        activeDataDepartment ? activeDataDepartment.especiesMigratorias : 0,
        activeDataDepartment ? activeDataDepartment.especiesExoticas : 0
    ]

    let departmentDataToRender = [
        activeDataTown ? activeDataTown.especiesAmenaza : 0,
        activeDataTown ? activeDataTown.especiesCites : 0,
        activeDataTown ? activeDataTown.especiesEndemicas : 0,
        activeDataTown ? activeDataTown.especiesMigratorias : 0,
        activeDataTown ? activeDataTown.especiesExoticas : 0
    ]

    const data = {
        labels: ['Especies Amenazadas', 'Especies CITES', 'Especies Endémicas', 'Especies Migratorias', 'Especies Exóticas'],
        datasets: [
            {
                label: 'Colombia',
                backgroundColor: 'rgba(0, 168, 180, 0.2)',
                borderColor: 'rgba(0, 168, 180, 1)',
                pointBackgroundColor: 'rgba(0, 168, 180, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(0, 168, 180, 1)',
                data: countryDataToRender
            },
            {
                label: 'Santander',
                backgroundColor: 'rgba(255, 120, 71, 0.2)',
                borderColor: 'rgba(255, 120, 71, 1)',
                pointBackgroundColor: 'rgba(255, 120, 71, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: departmentDataToRender
            }
        ]
    };

    return (
        {
            dataDepartment: activeDataDepartment,
            dataTown: activeDataTown,
            radarData: data
        }
    )
}

export default connect(mapStateToProps)(GeoRadarComponent)