import {combineReducers} from 'redux';
import questions from 'reducers/questions';
import questionDetail from 'reducers/questionDetail';
import globals from './globals';
import profiles from './profiles';
import profileDetail from './profileDetail';
import gallery from  './gallery';

const rootReducer = combineReducers({
    questions,
    questionDetail,
    globals,
    profiles,
    profileDetail,
    gallery
});

export default rootReducer;
