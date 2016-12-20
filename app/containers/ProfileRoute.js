import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {loadProfileDetail} from '../actions/profiles';
import Helmet from 'react-helmet';
import {browserHistory} from 'react-router';
import GalleryList from '../components/gallery/GalleryList';

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
        let profile = this.props.profileData.get('profile');

        return (
            <div className="profile-view">
                <Helmet
                    title={profile.get('name')}
                />
                <img src={profile.get('profileImgUrl')} alt={profile.get('name')}/>
                <h1>{profile.get('name')}</h1>
                <p>{profile.get('description')}</p>

                <GalleryList items={this.props.profileData.get('galleryList')}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {profileData: state.profileDetail}
}

ProfileRoute.propTypes = {
    profileData: PropTypes.object.isRequired
};

export {ProfileRoute}
export default connect(mapStateToProps, {loadProfileDetail})(ProfileRoute)
