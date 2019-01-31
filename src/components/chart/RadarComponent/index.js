import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';
import connect from "react-redux/es/connect/connect";



class RadarComponent extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <Radar data={this.props.radarData} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const activeDataCountry = state.getIn(['data', 'groups', 'active', 'data', 'country', 0])
    const activeDataDepartment = state.getIn(['data', 'groups', 'active', 'data', 'department', 0])


    const data = {
        labels: ['Amenazadas', 'CITES', 'Endémicas', 'Migratorias', 'Exóticas'],
        datasets: [
            {
                label: 'Colombia',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [
                    activeDataCountry ? activeDataCountry.registros : 0,
                    59,
                    90,
                    81,
                    86]
            },
            {
                label: 'Santander',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [
                    activeDataDepartment ? activeDataDepartment.registros : 0,
                    48,
                    40,
                    19,
                    30]
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

export default connect(mapStateToProps)(RadarComponent)