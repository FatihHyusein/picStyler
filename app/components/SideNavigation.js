import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'

class SideNavigation extends Component {
    render() {
        return (
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
        )
    }
}

SideNavigation.defaultProps = {
    routes: [
        {url: '/', title: "Home"},
        {url: '/', title: "About picStyler"}
    ]
};

export default SideNavigation;
