import {CALL_API, CHAIN_API} from 'middleware/api'

export const TOGGLE_SIDE_NAV = Symbol('TOGGLE_SIDE_NAV');
export function toggleSideNav() {
    return {
        type: TOGGLE_SIDE_NAV
    }
}

export const TOGGLE_LOGIN_FORM = Symbol('TOGGLE_LOGIN_FORM');
export function toggleLoginForm() {
    return {
        type: TOGGLE_LOGIN_FORM
    }
}

export const PROCEED_LOGIN = Symbol('PROCEED_LOGIN');
export function login(loginData) {
    return {
        [CALL_API]: {
            method: 'post',
            path: '/api/login',
            successType: PROCEED_LOGIN,
            body: loginData
        }
    }
}

export const PROCEED_LOGOUT = Symbol('PROCEED_LOGOUT');
export function logout() {
    return {
        [CALL_API]: {
            method: 'post',
            path: '/api/logout',
            successType: PROCEED_LOGOUT,
        }
    }
}

export function register(registerData) {
    return {
        [CALL_API]: {
            method: 'post',
            path: '/api/register',
            successType: PROCEED_LOGIN,
            body: registerData
        }
    }
}


export const TOGGLE_UPLOAD_FORM = Symbol('TOGGLE_UPLOAD_FORM');
export function toggleUploadForm() {
    return {
        type: TOGGLE_UPLOAD_FORM
    }
}


export const UPLOAD_IMAGE = Symbol('UPLOAD_IMAGE');
export function uploadImage(imageData) {
    return {
        [CALL_API]: {
            method: 'post',
            path: '/api/uploadImage',
            successType: UPLOAD_IMAGE,
            body: imageData
        }
    }
}