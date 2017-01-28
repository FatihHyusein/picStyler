import {CALL_API, CHAIN_API} from 'middleware/api'

export const LOADED_PROFILES = Symbol('LOADED_PROFILES');
export function loadProfiles() {
    return {
        [CALL_API]: {
            method: 'get',
            path: '/profiles',
            successType: LOADED_PROFILES
        }
    }
}

export const LOADED_PROFILE_DETAIL = Symbol('LOADED_PROFILE_DETAIL');
export function loadProfileDetail({id, history}) {
    return {
        [CALL_API]: {
            method: 'get',
            path: `/profiles/${id}`,
            successType: LOADED_PROFILE_DETAIL,
            afterError: ()=> {
                history.push('/')
            }
        }
    }
}

export const UPDATE_PROFILE_DETAIL = Symbol('UPDATE_PROFILE_DETAIL');
export function updateProfileDetail(id, profileData, afterSuccess) {
    return {
        [CALL_API]: {
            method: 'post',
            path: `/profiles/${id}/update`,
            successType: UPDATE_PROFILE_DETAIL,
            body: profileData,
            afterSuccess: afterSuccess
        }
    }
}
