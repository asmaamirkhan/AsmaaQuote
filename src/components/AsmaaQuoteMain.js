/* 
  author: Asmaa Mirkhan ~ 2019
*/

import React, { Component } from 'react';
import AsmaaQuoteMenu from './AsmaaQuoteMenu';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

class AsmaaQuoteMain extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    componentDidMount() {

    }



    render() {
        return (
            <div>
                <Layout>
                    <AsmaaQuoteMenu/>
                    <Content style={{ padding: '0 50px' }}>

                        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </div>
        );

    }
}

export default AsmaaQuoteMain;