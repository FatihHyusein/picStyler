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
            isMultipart: true,
            path: '/login',
            successType: PROCEED_LOGIN,
            body: loginData,
            phpApi: true
        }
    }
}

export const PROCEED_LOGOUT = Symbol('PROCEED_LOGOUT');
export function logout({afterSuccess}) {
    return {
        [CALL_API]: {
            method: 'post',
            path: '/logout',
            successType: PROCEED_LOGOUT,
            afterSuccess: afterSuccess,
            phpApi: true
        }
    }
}

export const PROCEED_REGISTER = Symbol('PROCEED_REGISTER');
export function register(registerData) {
    return {
        [CALL_API]: {
            method: 'post',
            path: '/register',
            successType: PROCEED_REGISTER,
            body: registerData,
            phpApi: true
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

export const UPLOAD_IMAGE_SUCCESS = Symbol('UPLOAD_IMAGE_SUCCESS');
export function uploadImageSuccess(imageData) {
    return {
        type: UPLOAD_IMAGE_SUCCESS,
        response: imageData
    }
}

export const UPDATE_MY_PROFILE = Symbol('UPDATE_MY_PROFILE');
export function updateMyProfile(profileData, afterSuccess) {
    return {
        [CALL_API]: {
            method: 'post',
            isMultipart: true,
            path: `/user`,
            successType: UPDATE_MY_PROFILE,
            body: profileData,
            afterSuccess: afterSuccess,
            phpApi: true
        }
    }
}
