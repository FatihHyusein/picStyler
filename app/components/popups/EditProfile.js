import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as GlobalActions from '../../actions/globals';


class EditProfilePopup extends Component {
    constructor(props) {
        super(props);

        this.toggleEditProfileForm = this.toggleEditProfileForm.bind(this);

        this.handleAvatarChange = this.handleAvatarChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
    }


    render() {
        return (
            <div className="login gallery-item-popup">
                <div className="close-icon" onClick={this.toggleEditProfileForm}></div>
                <div className="gallery-item-popup-content">
                    <div>
                        <div className="login-header">Редакитирай профила си</div>
                        <div className="logged-form-container">
                            <form onSubmit={this.updateProfile}>
                                <label>
                                    <div className="image-viewer-container">
                                        <img src={this.state.avatar ? this.state.avatar : "/assets/icons/avatar_bg.png"}
                                             id="image-viewer"/>
                                    </div>
                                    <input type="file" className="display-none" id="profile-picture"
                                           onChange={this.handleAvatarChange}/>
                                </label>
                                <div>{this.props.myProfile.get('name')}</div>
                                <input type="number" className="grey-input" placeholder="Години"
                                       onChange={this.handleAgeChange}/>
                                <div className="gender-container">
                                    <label>
                                        <input type="radio"
                                               value="0"
                                               checked={this.state.gender == 0}
                                               onChange={this.handleGenderChange}/> Дама
                                    </label>

                                    <label>
                                        <input type="radio"
                                               value="1"
                                               checked={this.state.gender == 1}
                                               onChange={this.handleGenderChange}/> Джентълмен
                                    </label>
                                </div>
                                <input type="submit" className="btn" value="Запази"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        document.body.classList.add('overflow-hidden');
    }

    componentWillUnmount() {
        document.body.classList.remove('overflow-hidden');
    }

    toggleEditProfileForm() {
        this.props.dispatch(GlobalActions.toggleEditProfileForm());
    }

    handleEmailChange(e) {
        this.setState({registerEmail: e.target.value});
    }

    handleAgeChange(e) {
        this.setState({age: e.target.value});
    }

    handleGenderChange(e) {
        this.setState({gender: e.target.value});
    }

    handleAvatarChange(e) {
        let file = e.target.files[0];

        if (file) {
            let reader = new FileReader();
            reader.onloadend = (e) => {
                this.setState({avatar: e.target.result});
            };

            reader.readAsDataURL(file);
        }
    }

    updateProfile(e) {
        e.preventDefault();

        this.props.dispatch(GlobalActions.updateMyProfile(this.props.myProfile.get('id'),
            {
                avatar: this.state.avatar,
                age: this.state.age,
                gender: this.state.gender,

            },
            () => {
                this.toggleEditProfileForm();
            }));
    }
}

EditProfilePopup.propTypes = {};

function mapStateToProps(state) {
    return {myProfile: state.globals.get('myProfile')}
}
export {EditProfilePopup};

export default connect(mapStateToProps)(EditProfilePopup)

