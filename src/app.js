/**
 * Created by Rayr Lee on 2017/12/9.
 */

import './scss/index.scss';

import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';

import {
    HashRouter as Router,
    Route,
} from 'react-router-dom';

function About() {
    return (<h2> About </h2>)
}

class Home extends React.Component {

    constructor() {
        super()

        this.state = {
            num: 10
        }
    }


    render() {
        return [
            <h1>Home {this.state.num}</h1>,
            <button onClick={() => {
                this.setState({
                    num: this.state.num + 10
                });

            }}>按钮</button>
        ]
    }
}

render(
    <Router>
        <div>
            <Route path="/" component={Home}/>
            <Route path="/about" component={About}/>
        </div>
    </Router>, document.getElementById('shixun')
);
