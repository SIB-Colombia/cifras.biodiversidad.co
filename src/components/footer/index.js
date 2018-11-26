import React, { Component } from 'react'
import FooterLayout from "./layout";
import { connect } from 'react-redux';

class Footer extends Component {
    componentDidMount () {
    }

    render () {
        return (
            <FooterLayout sidebarActive={this.props.sidebarVisible}/>
        )
    }
}

const mapStateToProps = ( state ) => (
    {
        sidebarVisible: state.sidebar
    }
)

export default connect(mapStateToProps)(Footer)

