import * as ActionType from 'actions/gallery';
import Immutable from 'immutable';

let defaultState = Immutable.fromJS([]);
function tagGroupsReducer(state = defaultState, action) {
    switch (action.type) {
        case ActionType.OPEN_TAG_GROUP_POPUP:
            return Immutable.fromJS(action.response);
            break;
        default:
            return state;
    }
}

export default tagGroupsReducer;
