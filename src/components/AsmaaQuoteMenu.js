/* 
  author: Asmaa Mirkhan ~ 2019
*/

import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import Categories from './media/categories';
import Logo from './media/AsmaaQuoteLogo.png';
const { Header, Content, Footer } = Layout;

class AsmaaQuoteMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    componentDidMount() {

    }



    render() {
        return (
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>

                <a href='https://github.com/asmaamirkhan/AsmaaQuote' target='_blank'>
                    <img alt='AsmaaQuoteLogo' src={Logo} style={{ height: '40px'}} />
                </a>

                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['0']}
                    style={{ lineHeight: '64px',  float: 'right' }}
                >

                    {
                        Categories.map((item, key) => {
                            return (<Menu.Item key={key}>{item.name}</Menu.Item>)
                        })
                    }
                    <Menu.Item key={-1}>About</Menu.Item>
                </Menu>
            </Header>
        );

    }
}

export default AsmaaQuoteMenu;