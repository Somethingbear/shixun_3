/**
 * Created by Rayr Lee on 2018/1/21.
 */

import {MAIN_MENU} from '../constants';

export default function (state = {}, action) {
    switch (action.type) {
        case MAIN_MENU:
            return action.res;
        default:
            return state
    }
}
