import React, { Component } from 'react';

export class AppFooter extends Component {

    render() {
        return  (
            <div className="layout-footer">                
                <img src="assets/layout/images/logo.svg" alt="" width="80"/>
                <span className="footer-text" style={{'marginLeft': '5px'}}> Personel Yönetim Sistemi</span>
            </div>
        );
    }
}