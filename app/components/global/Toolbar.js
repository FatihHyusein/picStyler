import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import * as GlobalActions from '../../actions/globals';

class Toolbar extends Component {
    constructor(props) {
        super(props);

        this.toggleSidenav = this.toggleSidenav.bind(this);
        this.toggleLoginForm = this.toggleLoginForm.bind(this);
        this.toggleImgUploadForm = this.toggleImgUploadForm.bind(this);
    }

    render() {
        let isLogged = !!this.props.globalProps.globals.get('myProfile').get('token');

        let openImageUploaderHandler = this.toggleLoginForm;
        if (isLogged) {
            openImageUploaderHandler = this.props.globalProps.globals.get('myProfile').get('userRole') == 2 ? '' : this.toggleImgUploadForm;
        }

        let userData = this.props.globalProps.globals.get('myProfile').get('userData');
        let profile = (
            <div className="profile-container">
                <Link to={`/profiles/${userData.get('username')}`}>
                    <img src={userData.get('profileImgUrl')}
                         alt={userData.get('username')}/>
                    {userData.get('username')}
                </Link>
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
                        <img className="action-img cpointer"
                             onClick={openImageUploaderHandler}
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
}

Toolbar.propTypes = {
    globalProps: PropTypes.object.isRequired
};

export default Toolbar;
