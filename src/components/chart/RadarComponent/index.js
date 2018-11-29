import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';

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
            data: [65, 59, 90, 81, 86]
        },
        {
            label: 'Santander',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [28, 48, 40, 19, 30]
        }
    ]
};

class RadarComponent extends Component {
    render() {
        return (
            <div>
                <Radar data={data} />
            </div>
        );
    }
}

export default RadarComponent