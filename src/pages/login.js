/**
 * Created by Rayr Lee on 2018/1/28.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {userFn} from 'actions';
import {$_ajax} from 'services';

@connect(
    state => ({user: state.user}),
    dispatch => bindActionCreators({userFn}, dispatch)
)
export default class extends Component {

    constructor() {
        super();
    }

    componentWillMount() {
    }

    render() {
        return [
            <h1 key={'h1'}>Login</h1>
        ]
    }
}