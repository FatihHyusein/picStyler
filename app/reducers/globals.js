import * as ActionType from '../actions/globals';
import _ from 'lodash';
import Immutable from 'immutable';

let defaultState = Immutable.fromJS({
    user: {}
});

export default function (state = defaultState, action) {
    console.log(5);
    switch (action.type) {
        case ActionType.TOGGLE_SIDE_NAV:
            console.log(6);
            return state.merge(action.response);

        default:
            return state;
    }
}
