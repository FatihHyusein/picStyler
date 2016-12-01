import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import SideNavigation from '../components/SideNavigation';
import Toolbar from '../components/Toolbar';
import Footer from '../components/Footer';

class AppRoute extends Component {
    render() {
        return (
            <div>
                <Helmet
                    defaultTitle="Redux real-world example"
                    titleTemplate="%s - Redux real-world example"
                    meta={[
                        {
                            "name": "description",
                            "content": "A boilerplate doing universal/isomorphic rendering with Redux + React-router + Express"
                        },
                    ]}
                    htmlAttributes={{"lang": "en"}}
                />
                <Toolbar />
                <SideNavigation />
                {this.props.children}
                <Footer/>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(AppRoute)
