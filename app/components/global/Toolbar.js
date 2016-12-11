import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import * as GlobalActions from '../../actions/globals';

class Toolbar extends Component {
    constructor(props) {
        super(props);

        this.toggleSidenav = this.toggleSidenav.bind(this);
        this.toggleLoginForm = this.toggleLoginForm.bind(this);
    }

    render() {
        return (
            <div className="toolbar">
                <div>
                    <button onClick={this.toggleSidenav}><img className="action-img" src="/assets/icons/hamburger.png"
                                                              alt="nav-toggler"/></button>
                </div>
                <div className="logo-container">
                    <Link to='/'><img src="/assets/logo.png" alt="logo"/></Link>
                </div>
                <div>
                    <div>
                        <button>Upload <img className="action-img" src="/assets/icons/hamburger.png"
                                            alt="img uploader"/></button>
                    </div>
                    <div>
                        <button onClick={this.toggleLoginForm}>Log in</button>
                    </div>
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
}

Toolbar.propTypes = {
    globalProps: PropTypes.object.isRequired
};

export default Toolbar;
