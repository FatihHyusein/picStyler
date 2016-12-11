import * as ActionType from '../actions/globals';
import _ from 'lodash';
import Immutable from 'immutable';

let defaultState = Immutable.fromJS({
    sidenavToggled: false,
    loginToggled: false,
    myProfile: {
        profileImgUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS5IXXCqJHE6G2HUaGf2lKZYirM8jmKtsBvuekLhqmh75OkfbtSsbTgbaIT",
        name: 'Truck'
    }
});

export default function (state = defaultState, action) {
    switch (action.type) {
        case ActionType.TOGGLE_SIDE_NAV:
            return state.merge({sidenavToggled: !state.get('sidenavToggled')});
            break;
        case ActionType.TOGGLE_LOGIN_FORM:
            return state.merge({loginToggled: !state.get('loginToggled')});
            break;
        case ActionType.PROCEED_LOGIN:
            return state.merge({
                myProfile: Immutable.fromJS(action.response),
                loginToggled: !state.get('loginToggled')
            });
            break;
        default:
            return state;
    }
}
