import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'

class SideNavigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let activeClass = this.props.globalProps.get('sidenavToggled') ? 'active' : '';
        return (
            <div className={'side-navigation ' + activeClass}>
                <ul>
                    {
                        this.props.routes.map((route)=> {
                            return (
                                <li key={route.url}>
                                    <Link to={`${route.url}`}> { route.title }</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
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
