/**
 * Created by Rayr Lee on 2018/1/28.
 */

import axios from 'axios';

export default {
    post(url, data) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: `/${url}`,
                data: data
            }).then((res) => {
                console.log(res.status);
                resolve(res.data);
            }).catch((err) => {
                reject(err);
            });
        });
    },
    get(url, params) {
        return new Promise((resolve, reject) => {
            axios.get(`/${url}`, {
                params: params
            }).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                reject(err);
            });
        });
    },
}