/**
 * Created by Rayr Lee on 2018/1/28.
 */

import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Login from './Login';
import App from './app';

export default class extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/app" component={App}/>
                <Route path="/login" component={Login}/>
                <Route component={() => (
                    <Redirect push to='/app'/>
                )}/>
            </Switch>
        )
    }
}