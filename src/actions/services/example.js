import React from 'react';

class ServiceExample extends React.Component {



    componentDidMount() {
        const query = '{ allGruposbiologicos { id nombre grupoBiologicoHijos { id nombre grupoBiologicoHijos {id nombre grupoBiologicoHijos {id nombre} } } } }'
        fetch('https://cors-anywhere.herokuapp.com/http://ec2-54-146-43-238.compute-1.amazonaws.com:8080/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: query }),
        })
            .then(res => res.json())
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>.</div>
        );
    }
}




export default ServiceExample





/*


http://ec2-54-146-43-238.compute-1.amazonaws.com:8080/graphql



    fetch('https://countries.trevorblades.com/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: '{ continents { name } }' }),
    })








   query grupos {
  grupoGeografiaByGeografia(geografiaId: 1150) {
    grupoBiologico {
      id
      nombre
    }
    vistasGrupos {
      especies
      registros
      especiesAmenaza
      especiesVU
      especiesEN
      especiesCR
      registrosAmenaza
      registrosVU
      registrosEN
      registrosCR
      especiesCites
      especiesCitesI
      especiesCitesII
      especiesCitesIII
      registrosCites
      registrosCitesI
      registrosCitesII
      registrosCitesIII
      especiesEndemicas
      especiesExoticas
      especiesMigratorias
      registrosEndemicas
      registrosExoticas
      registrosMigratorias
      tipoReporte
    }
  }
}

query municipio {
  vistaGeoByGeografiaPadre(geografiaId: 1150) {
    id
    geografia {
      id
      nombre
    }
    especies
    registros
    especiesAmenaza
    especiesVU
    especiesEN
    especiesCR
    registrosAmenaza
    registrosVU
    registrosEN
    registrosCR
    especiesCites
    especiesCitesI
    especiesCitesII
    especiesCitesIII
    registrosCites
    registrosCitesI
    registrosCitesII
    registrosCitesIII
    especiesEndemicas
    especiesExoticas
    especiesMigratorias
    registrosEndemicas
    registrosExoticas
    registrosMigratorias
    tipoReporte
  }
}

query entidades {
  entidadPublicadoraGeografiaByGeografia(geografiaId: 1150) {
    id
    entidadPublicadora {
      nombre
    }
    vistaEntidadPublicadora {
      id
      especies
      registros
    }
  }
}

})*/