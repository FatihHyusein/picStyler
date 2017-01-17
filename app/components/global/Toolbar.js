import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import * as GlobalActions from '../../actions/globals';

class Toolbar extends Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
        this.toggleSidenav = this.toggleSidenav.bind(this);
        this.toggleLoginForm = this.toggleLoginForm.bind(this);
        this.toggleImgUploadForm = this.toggleImgUploadForm.bind(this);
    }

    render() {
        let isLogged = !!this.props.globalProps.globals.get('myProfile').get('authToken');

        let profile = (
            <div className="profile-container">
                <Link to={`/profiles/${this.props.globalProps.globals.get('myProfile').get('id')}`}>
                    <img src={this.props.globalProps.globals.get('myProfile').get('profileImgUrl')}
                         alt={this.props.globalProps.globals.get('myProfile').get('name')}/>
                    {this.props.globalProps.globals.get('myProfile').get('name')}
                </Link>
                <button onClick={this.logout}>Logout</button>
            </div>
        );

        let login = (
            <i onClick={this.toggleLoginForm} className="white cpointer"><b>ВЛЕЗ</b></i>
        );

        return (
            <div className="toolbar">
                <div>
                    <img className="action-img cpointer" onClick={this.toggleSidenav}
                         src="/assets/icons/menu_sandwich.png"
                         alt="nav-toggler"/>
                </div>
                <div className="logo-container">
                    <Link to='/'><img src="/assets/icons/picstyler_logo.png" alt="logo"/></Link>
                </div>
                <div>
                    <div className="upload-action-img">
                        <img className="action-img cpointer" onClick={this.toggleImgUploadForm}
                             src="/assets/icons/upload_photo_icon.png"
                             alt="img uploader"/>
                    </div>
                    {isLogged ? profile : login}
                </div>
            </div>

        )
    }

    toggleSidenav() {
        this.props.globalProps.dispatch(GlobalActions.toggleSideNav());
    }

    toggleLoginForm() {
        this.props.globalProps.dispatch(GlobalActions.toggleLoginForm());
    }

    toggleImgUploadForm() {
        this.props.globalProps.dispatch(GlobalActions.toggleUploadForm());
    }

    logout() {
        this.props.globalProps.dispatch(GlobalActions.logout());
    }
}

Toolbar.propTypes = {
    globalProps: PropTypes.object.isRequired
};

export default Toolbar;
