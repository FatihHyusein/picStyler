import * as ActionType from '../actions/gallery';
import _ from 'lodash';
import Immutable from 'immutable';

let defaultState = Immutable.fromJS({
    galleryItem: {}
});

export default function (state = defaultState, action) {
    switch (action.type) {
        case ActionType.LOADED_GALLERY_ITEM:
            return state.merge({galleryItem: action.response});

        default:
            return state;
    }
}
