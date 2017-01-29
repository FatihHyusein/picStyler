import {CALL_API, CHAIN_API} from 'middleware/api'


export const LOADED_UPLOAD_IMAGE_PHOTOGRAPHS = Symbol('LOADED_UPLOAD_IMAGE_PHOTOGRAPHS');
export const LOADED_UPLOAD_IMAGE_TAGS = Symbol('LOADED_UPLOAD_IMAGE_TAGS');
export function loadUploadImageData() {
    return {
        [CHAIN_API]: [
            ()=> {
                return {
                    [CALL_API]: {
                        method: 'get',
                        path: `/photographs`,
                        successType: LOADED_UPLOAD_IMAGE_PHOTOGRAPHS
                    }
                }
            },
            () => {
                return {
                    [CALL_API]: {
                        method: 'get',
                        path: `/tags`,
                        successType: LOADED_UPLOAD_IMAGE_TAGS
                    }
                }
            }
        ]
    }
}

export const UPLOAD_ADMIN_IMAGES = Symbol('UPLOAD_ADMIN_IMAGES');
export function uploadAdminImages({imagesData, afterSuccess}) {
    return {
        [CALL_API]: {
            method: 'post',
            isMultipart: true,
            path: '/admin/photo',
            successType: UPLOAD_ADMIN_IMAGES,
            body: imagesData,
            afterSuccess: afterSuccess,
            phpApi: true
        }
    }
}
