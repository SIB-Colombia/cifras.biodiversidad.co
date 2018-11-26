import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GROUPS_QUERY = gql`
query GroupsQuery {
    Animales: grupoBiologico(id:1) {
        id
        nombre
        grupoBiologicoHijos {
            id
            nombre
            grupoBiologicoHijos {
                id
                nombre
                grupoBiologicoHijos {
                    id
                    nombre
                }
            }
        }
    }
}
`

class GroupsList extends Component {
    render () {
        return (
            <div>
                <h1>Hi</h1>
                <Query query={GROUPS_QUERY}>
                    {
                        ({ loading, error, data }) => {
                            if(loading) return <h4>Loading...</h4>
                            if(error) console.log(error)
                            console.log(data)

                            return <h1>Test</h1>
                        }
                    }
                </Query>
            </div>
        )
    }
}


export default GroupsList