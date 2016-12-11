import * as ActionType from '../actions/gallery';
import Immutable from 'immutable';

let defaultState = Immutable.fromJS([]);
function gallery(state = defaultState, action) {
    switch (action.type) {
        case ActionType.LOADED_GALLERY:
            return Immutable.fromJS(action.response);
            break;
        default:
            return state;
    }
}

export default gallery;
