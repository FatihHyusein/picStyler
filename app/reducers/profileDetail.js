import * as ActionType from '../actions/profiles';
import * as ActionTypeGallery from '../actions/gallery';
import _ from 'lodash';
import Immutable from 'immutable';

let defaultState = Immutable.fromJS({
    profile: {}
});

export default function (state = defaultState, action) {
    switch (action.type) {
        case ActionType.LOADED_PROFILE_DETAIL:
            return state.merge(action.response);

        case ActionType.UPDATE_PROFILE_DETAIL:
            return state.merge(action.response);

        case ActionTypeGallery.ADD_TAG_GROUP_TO_ITEM:
            return state.update(
                state.get('galleryList').findIndex(function (item) {
                    if (item.get("id") === action.response.id) {
                        return item;
                    }
                }), function (item) {
                    return Immutable.fromJS(action.response);
                }
            );

        default:
            return state;
    }
}
