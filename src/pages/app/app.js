/**
 * Created by Rayr Lee on 2018/1/21.
 */

import React from 'react';

import Header from './common/Header';
import Siderbar from './common/Siderbar';
import Footer from './common/Footer';

export default class extends React.Component {
    render() {
        return [
            <Header key="Header"/>,
            <Siderbar key="Siderbar"/>,
            <Footer key="Footer"/>
        ]
    }
}