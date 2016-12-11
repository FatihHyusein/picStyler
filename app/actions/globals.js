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
