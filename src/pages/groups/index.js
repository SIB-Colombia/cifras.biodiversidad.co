import React, {Component, Fragment} from 'react'
import {GROUPS} from "../../actions/services/queries";
import {Query} from "react-apollo";
import LoadingTemplate from '../templates/loading';
import {bindActionCreators} from "redux";
import * as actions from "../../actions";
import connect from "react-redux/es/connect/connect";
import Sidebar from "../../components/sidebar";
import queryString from "query-string";
import DataTemplateLayout from "../templates/DataTemplate/layout";

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
                                <DataTemplateLayout sidebarActive={this.props.sidebarVisible}>
                                    <SidebarTemplate
                                        {...this.props}
                                        page={'groups'}
                                        title="Búsqueda por grupos biológicos"
                                    />
                                </DataTemplateLayout>
                            </Fragment>
                        )
                    }
                }
            </Query>
        )
    }

    saveDataToState(data) {
        this.props.actions.fetchGroupsData(data)
        this.props.actions.filterGroup('1150')
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