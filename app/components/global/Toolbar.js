import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import * as GlobalActions from '../../actions/globals';

class Toolbar extends Component {
    render() {
        return (
            <div className="toolbar">
                <div>
                    <button onClick={this.toggleSidenav}><img className="action-img" src="/assets/icons/hamburger.png"
                                                              alt="nav-toggler"/></button>
                </div>
                <div>
                    <img src="/assets/logo.png" alt="logo"/>
                </div>
                <div>
                    <div>
                        <button>Upload <img className="action-img" src="/assets/icons/hamburger.png"
                                            alt="img uploader"/></button>
                    </div>
                    <div>
                        <button>Log in</button>
                    </div>
                </div>
            </div>

        )
    }

    toggleSidenav() {
        console.log(1);
        GlobalActions.toggleSideNav();
    }
}

export default Toolbar;
