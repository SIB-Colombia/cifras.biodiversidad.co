import React, {Component} from 'react'
import TableComponent from "./table/index";
import Panel from "../../components/panel/index";
import GroupsLayout from "./layout";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import * as actions from "../../actions";
import Tabs from "../../components/tabs";
import GroupsRadarComponent from "./RadarComponent";

class GroupsContainer extends Component {
    componentDidMount() {
        this.filterGroup()
        this.props.actions.sidebarVisibility(true)
    }
    componentDidUpdate () {
        this.filterGroup()
    }

    render () {
        return (
            <GroupsLayout sidebarActive={this.props.sidebar}>
                <div className="breadcrumb">
                    <h1 className="underline-title">{this.props.title} </h1>
                    <p><span className="caret">></span>{this.props.activeIdToRender.name}</p>
                </div>
                {
                    this.props.dataVisualization &&
                    <Panel>
                        <div className="col-6">
                            <img className="groupsImage" src={this.props.imageUrl}  alt=""/>
                        </div>
                        <div className="col-6">
                            {/*<Tabs/>*/}
                            <GroupsRadarComponent
                                ref={ref => this.chartInstance = ref && ref.chartInstance}
                                type='radar'
                                {...this.props}
                            />
                        </div>
                    </Panel>
                }
                <TableComponent/>
            </GroupsLayout>
        )
    }

    filterGroup() {
        let dataCountryActive = this.props.dataGroupsCountry.filter(item => (
            item.grupoBiologicoGeografia.grupoBiologico.id === this.props.activeIdToRender.id
            //item.id === this.props.activeIdToRender.id
        ))
        let dataDepartmentActive = this.props.dataGroupsDepartment.filter(item => (
            item.grupoBiologicoGeografia.grupoBiologico.id === this.props.activeIdToRender.id
            //item.id === this.props.activeIdToRender.id
        ))

        if (this.props.activeIdToRender.id === '0') {
            this.props.actions.activeGroupsDataCountry(this.props.dataCountry)
            this.props.actions.activeGroupsDataDepartment(this.props.dataDepartment)
        } else {
            this.props.actions.activeGroupsDataCountry(dataCountryActive)
            this.props.actions.activeGroupsDataDepartment(dataDepartmentActive)
        }



    }


}

const mapStateToProps = ( state, props ) => {

    return (
        {
            dataCountry: state.getIn(['data', 'general', 'country']),
            dataDepartment: state.getIn(['data', 'general', 'department']),
            dataGroupsCountry: state.getIn(['data', 'groups', 'data', 'country']),
            dataGroupsDepartment: state.getIn(['data', 'groups', 'data', 'department']),
            activeIdToRender: state.getIn(['data', 'groups', 'active', 'item']),
            groupsList: state.getIn(['interaction', 'sidebar', 'items']),
            imageUrl: state.getIn(['data', 'groups', 'active', 'imageUrl'])

        }
    )
}


const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(GroupsContainer)
