import {combineReducers} from 'redux';
import questions from 'reducers/questions';
import questionDetail from 'reducers/questionDetail';
import globals from './globals';
import profiles from './profiles';
import profileDetail from './profileDetail';
import gallery from  './gallery';
import tagGroups from  './tagGroups';

const rootReducer = combineReducers({
    questions,
    questionDetail,
    globals,
    profiles,
    profileDetail,
    gallery,
    tagGroups
});

export default rootReducer;
