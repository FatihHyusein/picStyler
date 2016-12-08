import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {List} from 'immutable';

class Profiles extends Component {
    render() {
        return (
            <div className="profile-list">
                Profiles list
                {
                    this.props.profiles.map((profile)=> {
                        return (
                            <div className="profile-list-item" key={profile.get('id')}>
                                <img src={profile.get('profileImgUrl')} alt={profile.get('name')}/>
                                <Link to={`/profiles/${profile.get('id')}`}> { profile.get('name') }</Link>
                                <p>{profile.get('description')}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

Profiles.propTypes = {
    profiles: PropTypes.instanceOf(List).isRequired
};

export default Profiles;
