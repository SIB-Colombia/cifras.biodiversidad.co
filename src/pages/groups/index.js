import React, {Component, Fragment} from 'react'
import GroupsLayout from "./layout";
import Sidebar from "../../components/sidebar";
import { connect } from 'react-redux'
import RadarComponent from "../../components/chart/RadarComponent";
import TableComponent from "../../components/table";
import queryString from 'query-string'
import ServiceExample from "../../services/service-example";
import GroupsList from "../../services/groups-list";
import Tabs from "../../components/tabs";

class Groups extends Component {
    static fetchGroupData (value )  {
       console.log( `Filtro URL: ${value}`)
    }

    componentDidMount () {
        const values = queryString.parse(this.props.location.search)
        Groups.fetchGroupData(values.grupo)

        this.props.dispatch({
            type: 'BUTTON_SIDEBAR_VISIBILITY',
            payload: {
                toggleSidebarVisible: true
            }
        })
        this.props.dispatch({
            type: 'SIDEBAR_VISIBILITY',
            payload: {
                sidebarVisible: true
            }
        })
    }

    render () {
        return (
            <Fragment>
                {
                    this.props.sidebarVisible &&
                    <Sidebar groups={this.props.groups}/>
                }
                <GroupsLayout sidebarActive={this.props.sidebarVisible} >
                    <h1>Búsqueda por grupos biológicos </h1>
                    {/*<GroupsList/>*/}
                    <div className="VisualizationPanel card white row">
                        <div className="illustration or map col-6" >

                        </div>
                        <div className="col-6">
                                <RadarComponent
                                    {...this.props}
                                    ref={ref => this.chartInstance = ref && ref.chartInstance}
                                    type='radar'
                                />
                            <Tabs>
                            </Tabs>
                        </div>
                    </div>

                    <div className="table">
                        <TableComponent/>
                    </div>
                </GroupsLayout>

            </Fragment>

        )
    }
}




const mapStateToProps = ( state ) => (
    {
        groups: Object.values( state.data.groups ),
        sidebarVisible: state.interaction.sidebar
    }
)

export default connect(mapStateToProps)(Groups)