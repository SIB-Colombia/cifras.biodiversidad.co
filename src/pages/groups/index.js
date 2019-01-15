import React, {Component, Fragment} from 'react'
import {GROUPS, GROUPS_LIST} from "../../actions/services/queries";
import {Query} from "react-apollo";
import LoadingTemplate from '../templates/loading';
import {bindActionCreators} from "redux";
import * as actions from "../../actions";
import connect from "react-redux/es/connect/connect";
import Sidebar from "../../components/sidebar";
import queryString from "query-string";
import DataTemplate from "../templates/DataTemplate";

class Groups extends Component {
    componentDidMount () {
        const urlValue = queryString.parse(this.props.location.search)
        //this.props.actions.filterGroup(urlValue)
        this.props.actions.sidebarVisibility(true)
        this.props.actions.buttonSidebarVisibility(true)
        //this.props.actions.filterTopic("")
    }

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
                        this.saveDataToState(data)
                        return (
                            <Fragment>
                                {
                                    this.props.sidebarVisible &&
                                    <Sidebar items={sidebarItems}/>
                                }
                                <DataTemplate
                                    sidebar={this.props.sidebarVisible}
                                    page={'groups'}
                                    title="Búsqueda por grupos biológicos"
                                    dataVisualization={true}
                                />
                            </Fragment>
                        )
                    }
                }
            </Query>
        )
    }

    saveDataToState(data) {
        this.props.actions.fetchGroupsData(data)
        // this.props.actions.filterGroup('29')
    }
}

const mapStateToProps = ( state ) => {
    return (
        {
            sidebarVisible: state.getIn(['interaction', 'sidebar']),
        }
    )
}

const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators(actions, dispatch)

    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Groups)