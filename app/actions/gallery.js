import {CALL_API, CHAIN_API} from 'middleware/api'

export const LOADED_GALLERY = Symbol('LOADED_GALLERY');
export function loadGallery() {
    return {
        [CALL_API]: {
            method: 'get',
            path: '/api/mainGallery',
            successType: LOADED_GALLERY
        }
    }
}


