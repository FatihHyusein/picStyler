import * as ActionType from '../actions/globals';
import _ from 'lodash';
import Immutable from 'immutable';
import cookie from 'react-cookie';
import * as GlobalActions from '../actions/globals';

let defaultState = Immutable.fromJS({
    sidenavToggled: false,
    loginToggled: false,
    myProfile: {
        profileImgUrl: "",
        name: '',
        authToken: ''
    }
});

export default function (state = defaultState, action) {
    let cookieState;

    switch (action.type) {
        case ActionType.TOGGLE_SIDE_NAV:
            return state.merge({sidenavToggled: !state.get('sidenavToggled')});
        case ActionType.TOGGLE_LOGIN_FORM:
            return state.merge({loginToggled: !state.get('loginToggled')});
            break;
        case ActionType.PROCEED_LOGIN:
            saveData(action.response);
            cookieState = returnStateFromCookie(state);
            return cookieState ? cookieState.merge({loginToggled: !state.get('loginToggled')}) : state;

        case ActionType.PROCEED_LOGOUT:
            saveData({
                profileImgUrl: "",
                name: '',
                authToken: ''
            });

            cookieState = returnStateFromCookie(state);
            return cookieState ? cookieState : state;

        default:
            cookieState = returnStateFromCookie(state);
            return cookieState ? cookieState : state;
    }


    function saveData(data) {
        cookie.save('globals', JSON.stringify(data));
    }

    function returnStateFromCookie(state) {
        let cookieData = cookie.load('globals');
        if (cookieData) {
            return state.merge({
                myProfile: Immutable.fromJS(cookieData)
            });
        }
    }
}
