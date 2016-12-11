import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import * as GlobalActions from '../../actions/globals';

class SideNavigation extends Component {
    constructor(props) {
        super(props);

        this.toggleSidenav = this.toggleSidenav.bind(this);
    }

    render() {
        let activeClass = this.props.globalProps.globals.get('sidenavToggled') ? 'active' : '';
        return (
            <div className={'side-navigation ' + activeClass}>
                <ul>
                    {
                        this.props.routes.map((route)=> {
                            return (
                                <li key={route.url} onClick={this.toggleSidenav}>
                                    <Link to={`${route.url}`}> { route.title }</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    toggleSidenav() {
        this.props.globalProps.dispatch(GlobalActions.toggleSideNav());
    }
}

SideNavigation.defaultProps = {
    routes: [
        {url: '/', title: "Home"},
        {url: '/about', title: "About picStyler"},
        {url: '/profiles', title: "Profiles"}
    ]
};

SideNavigation.propTypes = {
    globalProps: PropTypes.object.isRequired
};

export default SideNavigation;
