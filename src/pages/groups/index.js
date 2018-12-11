import React, {Component, Fragment} from 'react'
import SearchSidebarPage from "../templates/sidebarTemplate/index";
import {GROUPS} from "../../actions/services/queries";
import {Query} from "react-apollo";
import LoadingTemplate from '../templates/loading';

class Groups extends Component {


    render () {
        return (
            <Query query={GROUPS}>
                {
                    ({ loading, error, data }) => {
                        if(loading) return <LoadingTemplate />
                        if(error) console.log(error)
                        const sidebarItems = [
                            data.animales,
                            data.plantas,
                            data.hongos,
                            data.algas,
                            data.liquenes,
                        ]
                        return (
                            <SearchSidebarPage
                                {...this.props}
                                data={data.allVistagrupobiologico}
                                sidebarItems={sidebarItems}
                                title="Búsqueda por grupos biológicos"
                            />
                        )
                    }
                }
            </Query>
        )
    }
}

export default Groups