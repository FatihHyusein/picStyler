import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {List} from 'immutable';

class PhotographProfile extends Component {
    render() {
        return (
            <div className="photograph-profile">
                <img src={this.props.profileInfo.get('profileImgUrl')} alt={this.props.profileInfo.get('name')}/>
                <div>{ this.props.profileInfo.get('name') }</div>
                <div>Фотограф</div>
                <div>{ this.props.profileInfo.get('description') }</div>

                <div>
                    <div>
                        <div>254 <img src="/assets/icons/upload_photo_icon.png" alt="liked"/></div>
                        <div>Публикувани<br/>фотографии</div>
                    </div>
                    <div>
                        <div>15 <img src="/assets/icons/like_icon_active.png" alt="liked"/></div>
                        <div>Харесвани<br/>стилове</div>
                    </div>
                </div>
            </div>
        )
    }
}

PhotographProfile.propTypes = {
    profileInfo: PropTypes.object.isRequired
};

export default PhotographProfile;
