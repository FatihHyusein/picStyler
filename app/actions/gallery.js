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


export const OPEN_TAG_GROUP_POPUP = Symbol('OPEN_TAG_GROUP_POPUP');
export function getTagGroups(itemId) {
    return {
        [CALL_API]: {
            method: 'get',
            path: `/api/tagGroups/${itemId}`,
            successType: OPEN_TAG_GROUP_POPUP,
        }
    }
}


export const ADD_TAG_GROUP_TO_ITEM = Symbol('ADD_TAG_GROUP_TO_ITEM');
export function addTagGroupToItem(sendData) {
    return {
        [CALL_API]: {
            method: 'post',
            path: `/api/galleryItem/${sendData.itemId}/addTagGroup`,
            successType: ADD_TAG_GROUP_TO_ITEM,
            body: sendData
        }
    }
}

