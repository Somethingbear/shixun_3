/**
 * Created by Rayr Lee on 2018/1/28.
 */

import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <ul className="sidebar-menu tree" data-widget="tree">
                        <li><a href="#"><i className="fa fa-circle-o text-red"></i> <span>工作面板</span></a></li>
                        <li><a href="#"><i className="fa fa-circle-o text-yellow"></i> <span>用户管理</span></a></li>
                    </ul>
                </section>
            </aside>
        )
    }
}