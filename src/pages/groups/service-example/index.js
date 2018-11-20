import React from 'react';

class ServiceExample extends React.Component {
    componentDidMount() {
        fetch('http://75d9b6e8.ngrok.io/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: '{ grupoBiologico(id: 1) { nombre } }' }),
        })
            .then(res => res.json())
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>s</div>
        );
    }
}

export default ServiceExample
