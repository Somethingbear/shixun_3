/**
 * Created by Rayr Lee on 2018/1/28.
 */

import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Workspace from './workspace';
import User from './user';
import Error from './error';

export default function ({match}) {
    return (
        <Switch>
            <Route path={`${match.url}/workspace`} component={Workspace}/>
            <Route path={`${match.url}/user`} component={User}/>
            <Route component={Error}/>
        </Switch>
    )
}