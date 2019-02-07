import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';
import connect from "react-redux/es/connect/connect";



class GroupsRadarComponent extends Component {

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
    const activeDataCountry = state.getIn(['data', 'groups', 'active', 'data', 'country', 0])
    const activeDataDepartment = state.getIn(['data', 'groups', 'active', 'data', 'department', 0])

    let countryDataToRender = [
        !activeDataCountry || activeDataCountry.especiesAmenaza === -1 ? 0 : activeDataCountry.especiesAmenaza,
        !activeDataCountry || activeDataCountry.especiesCites === -1 ? 0 : activeDataCountry.especiesCites,
        !activeDataCountry || activeDataCountry.especiesEndemicas === -1 ? 0 : activeDataCountry.especiesEndemicas,
        !activeDataCountry || activeDataCountry.especiesMigratorias === -1 ? 0 : activeDataCountry.especiesMigratorias,
        !activeDataCountry || activeDataCountry.especiesExoticas === -1 ? 0 : activeDataCountry.especiesExoticas
    ]

    let departmentDataToRender = [
        !activeDataDepartment || activeDataDepartment.especiesAmenaza === -1 ? 0 : activeDataDepartment.especiesAmenaza,
        !activeDataDepartment || activeDataDepartment.especiesCites === -1 ? 0 : activeDataDepartment.especiesCites,
        !activeDataDepartment || activeDataDepartment.especiesEndemicas === -1 ? 0: activeDataDepartment.especiesEndemicas,
        !activeDataDepartment || activeDataDepartment.especiesMigratorias === -1 ? 0: activeDataDepartment.especiesMigratorias,
        !activeDataDepartment || activeDataDepartment.especiesExoticas === -1 ? 0: activeDataDepartment.especiesExoticas
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
            dataCountry: activeDataCountry,
            dataDepartment: activeDataDepartment,
            radarData: data
        }
    )
}

export default connect(mapStateToProps)(GroupsRadarComponent)