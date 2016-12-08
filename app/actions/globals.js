import {CALL_API, CHAIN_API} from 'middleware/api'

export const TOGGLE_SIDE_NAV = Symbol('TOGGLE_SIDE_NAV');
export function toggleSideNav() {
    return {
        type: TOGGLE_SIDE_NAV
    }
}

