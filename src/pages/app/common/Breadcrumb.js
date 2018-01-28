/**
 * Created by Rayr Lee on 2018/1/28.
 */

import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <section className="content-header">
                <h1>
                    Dashboard
                    <small>Version 2.0</small>
                </h1>
                <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                    <li className="active">Dashboard</li>
                </ol>
            </section>
        )
    }
}