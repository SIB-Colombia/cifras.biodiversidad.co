import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';
import connect from "react-redux/es/connect/connect";



class GeoRadarComponent extends Component {

    render() {
        return (
            <div>
                <Radar
                    data={this.props.radarData}
                    height={200}
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
    const activeDataDepartment = state.getIn(['data', 'geo', 'active', 'data', 'department', 0])
    const activeDataTown = state.getIn(['data', 'geo', 'active', 'data', 'town', 0])

    const activeTownName =  state.getIn(['data', 'geo', 'active', 'data', 'town', 0, 'geografia', 'nombre'])
    const activeDepartmentName =  state.getIn(['data', 'geo', 'active', 'data', 'department', 0, 'geografia', 'nombre'])

    let countryDataToRender = [
        !activeDataDepartment || activeDataDepartment.especiesAmenaza === -1 ? 0 : activeDataDepartment.especiesAmenaza,
        !activeDataDepartment || activeDataDepartment.especiesCites === -1 ? 0 : activeDataDepartment.especiesCites,
        !activeDataDepartment || activeDataDepartment.especiesEndemicas === -1 ? 0 : activeDataDepartment.especiesEndemicas,
        !activeDataDepartment || activeDataDepartment.especiesMigratorias === -1 ? 0 : activeDataDepartment.especiesMigratorias,
        !activeDataDepartment || activeDataDepartment.especiesExoticas === -1 ? 0 : activeDataDepartment.especiesExoticas
    ]

    let departmentDataToRender = [
        !activeDataTown || activeDataTown.especiesAmenaza === -1 ? 0 : activeDataTown.especiesAmenaza,
        !activeDataTown || activeDataTown.especiesCites === -1 ? 0 : activeDataTown.especiesCites,
        !activeDataTown || activeDataTown.especiesEndemicas === -1 ? 0: activeDataTown.especiesEndemicas,
        !activeDataTown || activeDataTown.especiesMigratorias === -1 ? 0: activeDataTown.especiesMigratorias,
        !activeDataTown || activeDataTown.especiesExoticas === -1 ? 0: activeDataTown.especiesExoticas
    ]

    const data = {
        labels: ['Especies Amenazadas', 'Especies CITES', 'Especies Endémicas', 'Especies Migratorias', 'Especies Exóticas'],
        datasets: [
            {
                label: activeDepartmentName,
                backgroundColor: 'rgba(0, 168, 180, 0.2)',
                borderColor: 'rgba(0, 168, 180, 1)',
                pointBackgroundColor: 'rgba(0, 168, 180, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(0, 168, 180, 1)',
                data: countryDataToRender
            },
            {
                label: activeTownName,
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