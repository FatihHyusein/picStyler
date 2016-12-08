import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'

class SideNavigation extends Component {
    render() {
        return (
            <div className="side-navigation">
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

export default SideNavigation;
