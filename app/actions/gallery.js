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

export const ADD_COMMENT = Symbol('ADD_COMMENT');
export function addComment(galleryItemId, commentData) {
    return {
        [CALL_API]: {
            method: 'post',
            path: `/api/galleryItem/${galleryItemId}/addComment`,
            successType: ADD_COMMENT,
            body: commentData
        }
    }
}


