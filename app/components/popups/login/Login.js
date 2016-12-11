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
                <h3>LOGIN</h3>
                <form onSubmit={this.login}>
                    <input type="text" placeholder="Username" onChange={this.handleUsernameChange}/>
                    <input type="password" placeholder="Password" onChange={this.handlePasswordChange}/>
                    <input type="submit" value="Sign in"/>
                </form>
            </div>);

        let registerForm = (
            <div className={this.state.isLoginForm ? 'display-none' : ''}>
                <h3>REGISTER</h3>
                <form onSubmit={this.register}>
                    <input type="email" placeholder="Email" onChange={this.registerHandleEmailChange}/>
                    <input type="text" placeholder="Username" onChange={this.registerHandleUsernameChange}/>
                    <input type="password" placeholder="Password" onChange={this.registerHandlePasswordChange}/>
                    <input type="submit" value="Sign in"/>
                </form>
            </div>);

        let switchFormBtn = (
            <div>
                <button onClick={this.switchForms}>{this.state.isLoginForm ? 'Register' : 'Login'}</button>
            </div>
        );

        return (
            <div className="gallery-item-popup">
                <div className="close-icon" onClick={this.toggleLoginForm}></div>
                <div className="gallery-item-popup-content">
                    {loginForm}
                    {registerForm}

                    {switchFormBtn}
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

