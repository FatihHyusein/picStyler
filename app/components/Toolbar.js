import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'

class Toolbar extends Component {
    render() {
        return (
            <div>
                <button><img src="/assets/icons/hamburger.png" alt="nav-toggler"/></button>

                <div>
                    <div>
                        Go to <span>SEMI-PRO</span>
                    </div>
                    <div>
                        <img src="/assets/logo.png" alt="logo"/>
                    </div>
                    <div>
                        <div>
                            <button>Upload <img src="/assets/icons/hamburger.png" alt="img uploader"/></button>
                        </div>
                        <div>
                            <button>Log in</button>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default Toolbar;
