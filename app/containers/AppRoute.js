import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import SideNavigation from '../components/global/SideNavigation';
import Toolbar from '../components/global/Toolbar';
import Footer from '../components/global/Footer';
import Login from '../components/popups/login/Login';
import UploadFile from '../components/popups/UploadFile';

class AppRoute extends Component {
    render() {
        let loginPopup,
            uploadImgPopup;
        if (this.props.globals.get('loginToggled')) {
            loginPopup = <Login/>;
        }
        if (this.props.globals.get('uploadImgToggled')) {
            uploadImgPopup = <UploadFile/>;
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
                {uploadImgPopup}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {globals: state.globals}
}

export default connect(mapStateToProps)(AppRoute)
