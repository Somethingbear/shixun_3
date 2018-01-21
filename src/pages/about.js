/**
 * Created by Rayr Lee on 2018/1/21.
 */

import React from 'react';
import {connect} from 'react-redux';

@connect(
    state => ({user: state.user, menu: state.menu})
)
export default class extends React.Component {

    constructor(props) {
        super()
        this.state = {
            num: 10
        }
        console.log(props);
    }

    changeFn() {
        let t = this;

        t.setState({
            num: t.state.num + 10
        });
    }

    render() {
        return [
            <h1>About {this.state.num}</h1>,
            <button onClick={() => {
                this.changeFn();
            }}>按钮</button>
        ]
    }
}