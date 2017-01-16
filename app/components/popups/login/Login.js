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
    }

    render() {
        let loginForm = (
            <div className={!this.state.isLoginForm ? 'display-none' : ''}>
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
            <div className={this.state.isLoginForm ? 'display-none' : ''}>
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
}

Login.propTypes = {};

function mapStateToProps(state) {
    return {myProfile: state.globals.get('myProfile')}
}
export {Login};

export default connect(mapStateToProps)(Login)

