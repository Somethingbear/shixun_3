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
import Pages from './pages';

const store = configureStore();

render(
    <Provider store={store}>
        <Router><Pages/></Router>
    </Provider>, document.getElementById('shixun')
);
