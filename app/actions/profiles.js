import {CALL_API, CHAIN_API} from 'middleware/api'

export const LOADED_PROFILES = Symbol('LOADED_PROFILES');
export function loadProfiles() {
    return {
        [CALL_API]: {
            method: 'get',
            path: '/api/profiles',
            successType: LOADED_PROFILES
        }
    }
}

export const LOADED_PROFILE_DETAIL = Symbol('LOADED_PROFILE_DETAIL');
export function loadProfileDetail({id, history}) {
    return {
        [CALL_API]: {
            method: 'get',
            path: `/api/profiles/${id}`,
            successType: LOADED_PROFILE_DETAIL,
            afterError: ()=> {
                history.push('/')
            }
        }
    }
}
