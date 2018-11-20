import React, { Component } from 'react'
import GroupsLayout from "./layout";
import SidebarLayout from "../../components/sidebar/layout";
import Sidebar from "../../components/sidebar";

class Groups extends Component {
    render () {
        return (
            <fragment>

                {/*<Sidebar/>*/}
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
            </fragment>
        )
    }

}

export default Groups