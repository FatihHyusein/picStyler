import * as ActionType from '../actions/profiles';
import _ from 'lodash';
import Immutable from 'immutable';

let defaultState = Immutable.fromJS({
    profile: {}
});

export default function (state = defaultState, action) {
    switch (action.type) {
        case ActionType.LOADED_PROFILE_DETAIL:
            return state.merge(action.response);

        default:
            return state;
    }
}
