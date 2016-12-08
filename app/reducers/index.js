import {combineReducers} from 'redux';
import questions from 'reducers/questions';
import questionDetail from 'reducers/questionDetail';
import globals from './globals';
import profiles from './profiles';

const rootReducer = combineReducers({
    questions,
    questionDetail,
    globals,
    profiles
});

export default rootReducer;
