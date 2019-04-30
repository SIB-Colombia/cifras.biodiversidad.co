import React, { Component } from 'react'
import HomeLink from "./components/link";
import "../../../_styles/components/home-links.scss";
import { connect } from 'react-redux'


class HomeLinks extends Component {
    render () {
        return (
            <div className="HomeLinks">
                <div className="container">
                    <div className="row">
                        {
                            this.props.links.map( item => (
                                <div className="col-3" key={item.get('id')}>
                                    <HomeLink {...item.toJS()}/>
                                </div>

                            ))
                        }
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = ( state, props ) => (
    {
        links: state.getIn(['data', 'sections'])
    }
)

export default connect(mapStateToProps)(HomeLinks)