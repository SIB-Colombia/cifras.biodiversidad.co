import React, {Component, Fragment} from 'react'
import GroupsLayout from "./layout";
import Sidebar from "../../components/sidebar";
import ServiceExample from "../../services/service-example";
import { connect } from 'react-redux'

class Groups extends Component {

    render () {
        return (
            <Fragment>
                {/*
                <Sidebar groups={this.props.groups}/>
                */}
                    <ServiceExample/>
                <GroupsLayout>
                    <h1>Búsqueda por grupos biológicos </h1>
                    <div className="VisualizationPanel">
                        <div className="illustration or map">

                        </div>
                        <div className="tabsContainer">
                            <div className="tabsNav">
                                <p className="tab">RRBB</p>
                            </div>
                            <div className="tabsContent">
                                <div className="graph">

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="table">

                    </div>
                </GroupsLayout>
            </Fragment>
        )
    }
}

const mapStateToProps = ( state, props ) => (
    {
        groups: Object.values( state.data.groups )
    }
)

export default connect(mapStateToProps)(Groups)