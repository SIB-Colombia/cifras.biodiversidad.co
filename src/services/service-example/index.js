import React from 'react';

class ServiceExample extends React.Component {
    componentDidMount() {
        fetch('https://cors-anywhere.herokuapp.com/https://0ffd1170.ngrok.io/graphql', {
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
            <div>a</div>
        );
    }
}

export default ServiceExample





/*
    fetch('https://countries.trevorblades.com/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: '{ continents { name } }' }),
    })


    fetch('https://75d9b6e8.ngrok.io/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: '{ grupoBiologico(id: 1) { nombre } }' }),
    })
})*/