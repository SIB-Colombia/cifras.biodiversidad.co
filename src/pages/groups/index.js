import React, {Component, Fragment} from 'react'
import GroupsLayout from "./layout";
import Sidebar from "../../components/sidebar";
import { connect } from 'react-redux'
import RadarComponent from "../../components/chart/RadarComponent";
import TableComponent from "../../components/table";

class Groups extends Component {
    componentDidMount () {
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
                <GroupsLayout sidebarActive={this.props.sidebarVisible}>
                    <h1>Búsqueda por grupos biológicos </h1>
                    <div className="VisualizationPanel card white">
                        <div className="illustration or map">

                        </div>
                        <div className="tabsContainer">
                            <div className="tabsNav">
                                <p className="tab">RRBB</p>
                            </div>
                            <div className="tabsContent">
                                <RadarComponent
                                    {...this.props}
                                    ref={ref => this.chartInstance = ref && ref.chartInstance}
                                    type='radar'
                                />
                            </div>
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
        sidebarVisible: state.sidebar
    }
)

export default connect(mapStateToProps)(Groups)