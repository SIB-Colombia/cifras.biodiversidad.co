import React,{ Component } from 'react'
import TabsLayout from "./layout";
import Tab from "./tab";

class Tabs extends Component {
    render () {
        return (
            <TabsLayout>
                <Tab/>
                <Tab/>
            </TabsLayout>
        )
    }
}

export default Tabs