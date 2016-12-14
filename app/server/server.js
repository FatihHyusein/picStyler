import Express from 'express';
import path from 'path';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {useRouterHistory, RouterContext, match} from 'react-router';

import {createMemoryHistory, useQueries} from 'history';
import compression from 'compression';
import Promise from 'bluebird';

import configureStore from 'store/configureStore';
import createRoutes from 'routes/index';

import {Provider} from 'react-redux';

import Helmet from 'react-helmet';
import cookie from 'react-cookie';

let server = new Express();
let port = process.env.PORT || 3000;
let scriptSrcs;
process.env.ON_SERVER = true;

let styleSrc;
if (process.env.NODE_ENV === 'production') {
    let refManifest = require('../../rev-manifest.json');
    scriptSrcs = [
        `/${refManifest['vendor.js']}`,
        `/${refManifest['app.js']}`,
    ];
    styleSrc = `/${refManifest['main.css']}`
} else {
    scriptSrcs = [
        'http://localhost:3001/static/vendor.js',
        'http://localhost:3001/static/dev.js',
        'http://localhost:3001/static/app.js'
    ];
    styleSrc = '/main.css'
}

server.use(compression());

if (process.env.NODE_ENV === 'production') {
    server.use(Express.static(path.join(__dirname, '../..', 'public')))
} else {
    server.use('/assets', Express.static(path.join(__dirname, '..', 'assets')));
    server.use(Express.static(path.join(__dirname, '../..', 'dist')));
}

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');


server.get('/api/mainGallery', (req, res)=> {
    let {galleryList} = require('./mock_api');
    res.send(galleryList);
});

server.get('/api/galleryItem/:id', (req, res)=> {
    let {galleryList} = require('./mock_api');
    res.send(galleryList[req.params.id]);
});

server.post('/api/galleryItem/:id/addComment', (req, res)=> {
    let {galleryList} = require('./mock_api');
    let newId = galleryList[req.params.id].social.comments.length + 50;
    galleryList[req.params.id].social.comments.push({
        id: newId,
        name: 'test' + newId,
        text: 'tova e comment' + newId,
        profileImgUrl: 'https://scontent.fsof3-1.fna.fbcdn.net/v/t1.0-9/10354953_979665262059478_8838653060096267035_n.jpg?oh=5c01533c64ca0cb6dbd91af994181964&oe=58B6619C'
    });
    res.send(galleryList[req.params.id]);
});

server.post('/api/login', (req, res)=> {
    let {myProfile} = require('./mock_api');
    res.send(myProfile);
});

server.post('/api/logout', (req, res)=> {
    let {myProfile} = require('./mock_api');
    res.send({});
});


server.post('/api/register', (req, res)=> {
    let {myProfile} = require('./mock_api');
    res.send(myProfile);
});

server.post('/api/upload', (req, res)=> {
    let {myProfile} = require('./mock_api');
    res.send(myProfile);
});

// mock apis
server.get('/api/questions', (req, res)=> {
    let {questions} = require('./mock_api');
    res.send(questions)
});

server.get('/api/profiles', (req, res)=> {
    let {profiles} = require('./mock_api');
    res.send(profiles)
});


server.get('/api/profiles/:id', (req, res)=> {
    res.send({profile: require('./mock_api').getProfileById(req.params.id)})
});


server.get('/api/users/:id', (req, res)=> {
    let {getUser} = require('./mock_api');
    res.send(getUser(req.params.id))
});
server.get('/api/questions/:id', (req, res)=> {
    let {getQuestion} = require('./mock_api');
    let question = getQuestion(req.params.id);
    if (question) {
        res.send(question)
    } else {
        res.status(404).send({reason: 'question not found'})
    }
});

server.get('*', (req, res, next)=> {
    cookie.plugToRequest(req, res);
    let history = useRouterHistory(useQueries(createMemoryHistory))();
    let store = configureStore();
    let routes = createRoutes(history);
    let location = history.createLocation(req.url);

    match({routes, location}, (error, redirectLocation, renderProps) => {
        if (redirectLocation) {
            res.redirect(301, redirectLocation.pathname + redirectLocation.search)
        } else if (error) {
            res.status(500).send(error.message)
        } else if (renderProps == null) {
            res.status(404).send('Not found')
        } else {
            let [ getCurrentUrl, unsubscribe ] = subscribeUrl();
            let reqUrl = location.pathname + location.search;

            getReduxPromise().then(()=> {
                let reduxState = escape(JSON.stringify(store.getState()));
                let html = ReactDOMServer.renderToString(
                    <Provider store={store}>
                        { <RouterContext {...renderProps}/> }
                    </Provider>
                );
                let metaHeader = Helmet.rewind();

                if (getCurrentUrl() === reqUrl) {
                    res.render('index', {metaHeader, html, scriptSrcs, reduxState, styleSrc})
                } else {
                    res.redirect(302, getCurrentUrl())
                }
                unsubscribe()
            })
                .catch((err)=> {
                    Helmet.rewind();
                    unsubscribe();
                    next(err);
                });
            function getReduxPromise() {
                let {query, params} = renderProps;
                let comp = renderProps.components[renderProps.components.length - 1].WrappedComponent;
                return comp.fetchData ? comp.fetchData({query, params, store, history}) : Promise.resolve();
            }
        }
    });
    function subscribeUrl() {
        let currentUrl = location.pathname + location.search;
        let unsubscribe = history.listen((newLoc)=> {
            if (newLoc.action === 'PUSH' || newLoc.action === 'REPLACE') {
                currentUrl = newLoc.pathname + newLoc.search
            }
        });
        return [
            ()=> currentUrl,
            unsubscribe
        ]
    }
});

server.use((err, req, res, next)=> {
    console.log(err.stack);
    // TODO report error here or do some further handlings
    res.status(500).send("something went wrong...")
});

console.log(`Server is listening to port: ${port}`);
server.listen(port);
