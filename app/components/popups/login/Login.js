import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as GlobalActions from '../../../actions/globals';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoginForm: false
        };

        this.toggleLoginForm = this.toggleLoginForm.bind(this);
        this.switchForms = this.switchForms.bind(this);
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);

        this.registerHandleEmailChange = this.registerHandleEmailChange.bind(this);
        this.registerHandleUsernameChange = this.registerHandleUsernameChange.bind(this);
        this.registerHandlePasswordChange = this.registerHandlePasswordChange.bind(this);

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);


        this.editProfileHandleAvatarChange = this.editProfileHandleAvatarChange.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
        this.editProfileHandleAgeChange = this.editProfileHandleAgeChange.bind(this);
        this.editProfileHandleGenderChange = this.editProfileHandleGenderChange.bind(this);
    }


    render() {
        let isLogged = !!this.props.myProfile.get('authToken');

        let loginForm = (
            <div className={!this.state.isLoginForm || isLogged ? 'display-none' : ''}>
                <div className="login-header">ВЛЕЗ</div>
                <div>
                    <form onSubmit={this.login}>
                        <input type="text" className="grey-input" placeholder="E-mail"
                               onChange={this.handleUsernameChange}/>
                        <input type="password" className="grey-input" placeholder="Парола"
                               onChange={this.handlePasswordChange}/>
                        <input type="submit" className="btn" value="Влез"/>
                        <div className="login-forgot-pass-container">
                            <i>Забравена парола?</i>
                            <div>
                                <label>
                                    <input type="checkbox"/> Запомни ме
                                </label>
                            </div>
                        </div>
                    </form>

                    <button className="btn" onClick={this.switchForms}>Влез с <i>facebook</i></button>
                    <button className="btn" onClick={this.switchForms}>Регистрирай се</button>
                </div>
            </div>);

        let registerForm = (
            <div className={this.state.isLoginForm || isLogged ? 'display-none' : ''}>
                <div className="login-header">РЕГИСТРИРАЙ СЕ</div>
                <div>
                    <form onSubmit={this.register}>
                        <input type="email" className="grey-input" placeholder="E-mail"
                               onChange={this.registerHandleEmailChange}/>
                        <input type="text" className="grey-input" placeholder="Име"
                               onChange={this.registerHandleUsernameChange}/>
                        <input type="password" className="grey-input" placeholder="Парола"
                               onChange={this.registerHandlePasswordChange}/>
                        <input type="submit" className="btn" value="Регистрирай се"/>
                    </form>
                    <button className="btn" onClick={this.switchForms}>Влез с <i>facebook</i></button>
                    <p>Вече имаш регистрация?</p>
                    <button className="btn" onClick={this.switchForms}>ВЛЕЗ</button>
                </div>
            </div>);

        let loggedForm = (
            <div className={isLogged ? '' : 'display-none'}>
                <div className="login-header">ПРОФИЛ</div>
                <div className="logged-form-container">
                    <form onSubmit={this.updateProfile}>
                        <label>
                            <div className="image-viewer-container">
                                <img src={this.state.avatar ? this.state.avatar : "/assets/icons/avatar_bg.png"}
                                     id="image-viewer"/>
                            </div>
                            <input type="file" className="display-none" id="profile-picture"
                                   onChange={this.editProfileHandleAvatarChange}/>
                        </label>
                        <div>{this.props.myProfile.get('name')}</div>
                        <input type="number" className="grey-input" placeholder="Години"
                               onChange={this.editProfileHandleAgeChange}/>
                        <div className="gender-container">
                            <label>
                                <input type="radio"
                                       value="0"
                                       checked={this.state.gender == 0}
                                       onChange={this.editProfileHandleGenderChange}/> Дама
                            </label>

                            <label>
                                <input type="radio"
                                       value="1"
                                       checked={this.state.gender == 1}
                                       onChange={this.editProfileHandleGenderChange}/> Джентълмен
                            </label>
                        </div>
                        <input type="submit" className="btn" value="Готово"/>
                    </form>
                    <button className="btn" onClick={this.toggleLoginForm}>Пропусни</button>
                </div>
            </div>
        );

        return (
            <div className="login gallery-item-popup">
                <div className="close-icon" onClick={this.toggleLoginForm}></div>
                <div className="gallery-item-popup-content">
                    <div className="login-image-container">
                        <img src="/assets/images/loginPhoto.jpg" alt="login-img"/>
                    </div>
                    <div className="login-form-container">
                        {loginForm}
                        {registerForm}
                        {loggedForm}

                        <div>
                            <hr/>
                            С тази регистрация Вие се съгласявате с нашите
                            <b>Правила и Условия, Полица на Поверителността</b> и
                            <b>Употребата на Бисквитки.</b>
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

    toggleLoginForm() {
        this.props.dispatch(GlobalActions.toggleLoginForm());
    }

    registerHandleEmailChange(e) {
        this.setState({registerEmail: e.target.value});
    }

    registerHandleUsernameChange(e) {
        this.setState({registerUsername: e.target.value});
    }

    registerHandlePasswordChange(e) {
        this.setState({registerPassword: e.target.value});
    }

    handleUsernameChange(e) {
        this.setState({username: e.target.value});
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    switchForms() {
        this.setState({isLoginForm: !this.state.isLoginForm});
    }


    login(e) {
        e.preventDefault();

        this.props.dispatch(GlobalActions.login({
            username: this.state.username,
            password: this.state.password
        }));
    }

    register(e) {
        e.preventDefault();

        this.props.dispatch(GlobalActions.register({
            username: this.state.registerUsername,
            password: this.state.registerPassword,
            email: this.state.registerEmail
        }));
    }


    editProfileHandleAgeChange(e) {
        this.setState({age: e.target.value});
    }

    editProfileHandleGenderChange(e) {
        this.setState({gender: e.target.value});
    }

    editProfileHandleAvatarChange(e) {
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
                this.toggleLoginForm();
            }));
    }
}

Login.propTypes = {};

function mapStateToProps(state) {
    return {myProfile: state.globals.get('myProfile')}
}
export {Login};

export default connect(mapStateToProps)(Login)

