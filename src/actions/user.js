/**
 * Created by Rayr Lee on 2018/1/21.
 */

import {MAIN_USER} from '../conf/constants';

export default function (res = {}) {
    return {
        type: MAIN_USER,
        res: res
    }
}