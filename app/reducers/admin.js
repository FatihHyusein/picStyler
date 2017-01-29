import * as ActionType from '../actions/admin';
import _ from 'lodash';
import Immutable from 'immutable';

let defaultState = Immutable.fromJS({
    photographs: [],
    tags: []
});

export default function (state = defaultState, action) {
    switch (action.type) {
        case ActionType.LOADED_UPLOAD_IMAGE_PHOTOGRAPHS:
            return state.merge({photographs: action.response.data});

        case ActionType.LOADED_UPLOAD_IMAGE_TAGS:
            return state.merge({tags: action.response.data});

        case ActionType.UPLOAD_ADMIN_IMAGES:
            return state.merge(action.response);

        default:
            return state;
    }
}
