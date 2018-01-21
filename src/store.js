/**
 * Created by Rayr Lee on 2018/1/21.
 */

import {createStore, combineReducers} from 'redux';
import * as reducers from './reducers';

const reducer = combineReducers({...reducers});

export default function (initalState) {
    return {
        ...createStore(reducer, initalState)
    }
};