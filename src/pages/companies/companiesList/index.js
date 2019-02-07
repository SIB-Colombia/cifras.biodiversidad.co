import React, {Component, Fragment} from 'react'
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import Company from "../company";


class CompaniesList extends Component {
    render () {
        return (
            <Fragment>
                {
                    this.props.activeCompanies.map(item => (
                        <Company
                            key={item.id}
                            {...item}

                        />
                    ))
                }
            </Fragment>
        )
    }
}

const mapStateToProps = ( state, props ) => (
    {
        activeCompanies: state.getIn(['data', 'companies', 'active', 'data'])
    }
)

export default connect(mapStateToProps)(CompaniesList)
