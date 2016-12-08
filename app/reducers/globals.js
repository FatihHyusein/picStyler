import * as ActionType from '../actions/globals';
import _ from 'lodash';
import Immutable from 'immutable';

let defaultState = Immutable.fromJS({
    sidenavToggled: false
});

export default function (state = defaultState, action) {
    switch (action.type) {
        case ActionType.TOGGLE_SIDE_NAV:
            return state.merge({sidenavToggled: !state.get('sidenavToggled')});

        default:
            return state;
    }
}
