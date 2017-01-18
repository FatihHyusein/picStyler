import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {List} from 'immutable';

class NormalProfile extends Component {
    render() {
        return (
            <div className="normal-profile">
                <img src={this.props.profileInfo.get('profileImgUrl')} alt={this.props.profileInfo.get('name')}/>
                <div>{ this.props.profileInfo.get('name') }</div>
                <div>
                    <div>15 <img src="/assets/icons/like_icon_active.png" alt="liked"/></div>
                    <div>Харесвани<br/>стилове</div>
                </div>
            </div>
        )
    }
}

NormalProfile.propTypes = {
    profileInfo: PropTypes.object.isRequired
};

export default NormalProfile;
