import React from 'react'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute} from 'react-router'
import configureStore from 'store/configureStore'

import AppRoute from 'containers/AppRoute'
import HomeRoute from 'containers/HomeRoute'
import Questions from 'containers/Questions'
import Question from 'containers/Question'
import ProfileListRoute from '../containers/ProfileListRoute';

export default function (history) {
    return (
        <Router history={history}>
            <Route path="/" component={AppRoute}>
                <Route path="profiles" component={ProfileListRoute}/>
                <Route path="questions" component={Questions}/>
                <Route path="questions/:id" component={Question}/>
                <IndexRoute component={HomeRoute}/>
            </Route>
        </Router>
    )
}
