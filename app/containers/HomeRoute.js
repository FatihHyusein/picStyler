import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import Helmet from 'react-helmet'

class HomeRoute extends Component {
    render() {
        return (
            <div className="home">
                <Helmet
                    title="News Feed"
                />




            </div>
        )
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(HomeRoute);
