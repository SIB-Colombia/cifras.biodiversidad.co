import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GROUPS_QUERY = gql`
query GroupsQuery {
    vistaGrupo(id: 1) {
    id
    especies
    especiesAmenaza
    especiesVU
    especiesEN
    especiesCR
    especiesCites
    especiesCitesI
    especiesCitesII
    especiesCitesIII
    especiesEndemicas
    especiesMigratorias
    especiesExoticas
    registros
    registrosAmenaza
    registrosVU
    registrosEN
    registrosCR
    registrosCites
    registrosCitesI
    registrosCitesII
    registrosCitesIII
    registrosEndemicas
    registrosMigratorias
    registrosExoticas
  }
}
`

class GroupsList extends Component {
    render () {
        return (
            <div>
                <Query query={GROUPS_QUERY}>
                    {
                        ({ loading, error, data }) => {
                            if(loading) return <h4>cargando...</h4>
                            if(error) console.log(error)
                            console.log(data)

                            return <h1>Datos cargados</h1>
                        }
                    }
                </Query>
            </div>
        )
    }
}


export default GroupsList