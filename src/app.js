/**
 * Created by Rayr Lee on 2017/12/9.
 */

import './scss/index.scss';

import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {HashRouter as Router, Route} from 'react-router-dom';

import configureStore from './store';

import Home from './pages/home';
import About from './pages/about';

const store = configureStore(JSON.parse(window.localStorage.getItem('test')));

render(
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </div>
        </Router>
    </Provider>, document.getElementById('shixun')
);
