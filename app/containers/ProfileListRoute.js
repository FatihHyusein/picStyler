import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {loadProfiles} from '../actions/profiles'
import {Link} from 'react-router'
import _ from 'lodash'
import Profiles from '../components/profile/Profiles'
import Helmet from 'react-helmet'

class ProfileListRoute extends Component {
    static fetchData({store}) {
        return store.dispatch(loadProfiles());
    }

    componentDidMount() {
        this.props.loadProfiles();
    }

    render() {
        return (
            <div>
                <Helmet
                    title="Profile list"
                />
                <Profiles profiles={this.props.profiles}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {profiles: state.profiles};
}

export {ProfileListRoute};
export default connect(mapStateToProps, {loadProfiles})(ProfileListRoute);

