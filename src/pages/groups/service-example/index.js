import React from 'react';

class ServiceExample extends React.Component {
    componentDidMount() {
        fetch('https://d857f24e.ngrok.io/graphql', {
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