import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {loadProfileDetail} from '../actions/profiles';
import Helmet from 'react-helmet';
import {browserHistory} from 'react-router';

class ProfileRoute extends Component {
    static fetchData({store, params, history}) {
        let {id} = params;
        return store.dispatch(loadProfileDetail({id, history}))
    }

    componentDidMount() {
        let {id} = this.props.params;
        this.props.loadProfileDetail({id, history: browserHistory})
    }

    render() {
        return (
            <div>
                <Helmet
                    title={'Profile id: ' + this.props.params.id}
                />
                {this.props.profile}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {profile: state.profile}
}

ProfileRoute.propTypes = {
    profile: PropTypes.object.isRequired
};

export {ProfileRoute}
export default connect(mapStateToProps, {loadProfileDetail})(ProfileRoute)
