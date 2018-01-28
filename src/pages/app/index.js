/**
 * Created by Rayr Lee on 2018/1/21.
 */

import React from 'react';

import Header from './common/Header';
import Siderbar from './common/Siderbar';
import Footer from './common/Footer';
import Breadcrumb from './common/Breadcrumb';
import Router from './router';

export default class extends React.Component {
    render() {
        return [
            <Header key="Header"/>,
            <Siderbar key="Siderbar"/>,
            <section className="content-wrapper" key="content">
                <Breadcrumb/>
                <div className="content"><Router {...this.props}></Router></div>
            </section>,
            <Footer key="Footer"/>
        ]
    }
}