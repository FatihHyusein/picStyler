import * as ActionType from '../actions/globals';
import * as ProfileActionType from '../actions/profiles';

import _ from 'lodash';
import Immutable from 'immutable';
import cookie from 'react-cookie';
import * as GlobalActions from '../actions/globals';

let defaultState = Immutable.fromJS({
    sidenavToggled: false,
    loginToggled: false,
    uploadImgToggled: false,
    myProfile: {
        userData: {
            email: '',
            username: ''
        },
        token: '',
        userRole: ''
    }
});

export default function (state = defaultState, action) {
    let cookieState;

    switch (action.type) {
        case ActionType.TOGGLE_SIDE_NAV:
            return state.merge({sidenavToggled: !state.get('sidenavToggled')});
        case ActionType.TOGGLE_LOGIN_FORM:
            return state.merge({loginToggled: !state.get('loginToggled')});

        case ActionType.PROCEED_LOGIN:
            saveData(action.response.data);
            cookieState = returnStateFromCookie(state);
            return cookieState ? cookieState.merge({loginToggled: !state.get('loginToggled')}) : state;

        case ActionType.PROCEED_REGISTER:
            saveData(action.response.data);
            cookieState = returnStateFromCookie(state);
            return cookieState ? cookieState : state;

        case ActionType.UPDATE_MY_PROFILE:
            saveData({
                userData: action.response.data,
                token: state.get('myProfile').get('token'),
                userRole: state.get('myProfile').get('userRole')
            });
            cookieState = returnStateFromCookie(state);
            return cookieState ? cookieState : state;

        case ActionType.TOGGLE_UPLOAD_FORM:
            return state.merge({uploadImgToggled: !state.get('uploadImgToggled')});


        case ActionType.UPLOAD_IMAGE:
            state = state.merge(action.response);
            return state.merge({uploadImgToggled: !state.get('uploadImgToggled')});


        case ActionType.UPLOAD_IMAGE_SUCCESS:
            state = state.merge(action.response);
            return state.merge({uploadImgToggled: !state.get('uploadImgToggled')});

        case ActionType.PROCEED_LOGOUT:
            saveData({
                userData: {
                    email: '',
                    username: ''
                },
                token: '',
                userRole: ''
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
