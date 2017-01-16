import * as ActionType from '../actions/profiles';
import Immutable from 'immutable';

let defaultState = Immutable.fromJS([]);
function profilesReducer(state = defaultState, action) {
    switch (action.type) {
        case ActionType.LOADED_PROFILES:
            return Immutable.fromJS(action.response);
        default:
            return state;
    }
}

export default profilesReducer;
