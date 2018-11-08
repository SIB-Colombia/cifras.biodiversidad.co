import React, { Component } from 'react'
import GroupsLayout from "./layout";
import SidebarLayout from "../../components/sidebar/layout";
import Sidebar from "../../components/sidebar";

class Groups extends Component {
    render () {
        return (
            <GroupsLayout>
                <Sidebar/>
                <p>Grupos</p>
            </GroupsLayout>
        )
    }

}

export default Groups