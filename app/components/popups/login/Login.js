import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as GlobalActions from '../../../actions/globals';


class Login extends Component {
    constructor(props) {
        super(props);

        this.toggleLoginForm = this.toggleLoginForm.bind(this);
        this.login = this.login.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    render() {
        return (
            <div className="gallery-item-popup">
                <div className="close-icon" onClick={this.toggleLoginForm}></div>
                <div className="gallery-item-popup-content">
                    <h3>LOGIN</h3>
                    <form onSubmit={this.login}>
                        <input type="text" placeholder="Username" onChange={this.handleUsernameChange}/>
                        <input type="password" placeholder="Password" onChange={this.handlePasswordChange}/>
                        <input type="submit" value="Sign in"/>
                    </form>
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

    handleUsernameChange(e) {
        this.setState({username: e.target.value});
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    login(e) {
        e.preventDefault();

        this.props.dispatch(GlobalActions.login({
            username: this.state.username,
            password: this.state.password
        }));
    }
}

Login.propTypes = {};

function mapStateToProps(state) {
    return {myProfile: state.globals.get('myProfile')}
}
export {Login};

export default connect(mapStateToProps)(Login)

