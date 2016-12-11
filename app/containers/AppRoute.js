import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import SideNavigation from '../components/global/SideNavigation';
import Toolbar from '../components/global/Toolbar';
import Footer from '../components/global/Footer';
import Login from '../components/popups/login/Login';

class AppRoute extends Component {
    render() {
        let loginPopup;
        if (this.props.globals.get('loginToggled')) {
            loginPopup = <Login/>
        }

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
                <Toolbar globalProps={this.props}/>
                <SideNavigation globalProps={this.props}/>
                {this.props.children}
                <Footer/>
                {loginPopup}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {globals: state.globals}
}

export default connect(mapStateToProps)(AppRoute)
