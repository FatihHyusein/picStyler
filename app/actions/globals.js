import {CALL_API, CHAIN_API} from 'middleware/api'

export const TOGGLE_SIDE_NAV = Symbol('TOGGLE_SIDE_NAV');
export function toggleSideNav() {
    console.log(2);
    return {
        [CALL_API]: {
            method: 'get',
            path: '/api/questions',
            successType: TOGGLE_SIDE_NAV
        }
    }
}

