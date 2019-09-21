// author: Asmaa Mirkhan ~ 2019
import React, { Component } from 'react';

import 'antd/dist/antd.css';
import '../styles/style.css';
import { Layout, Menu } from 'antd';

import { Typography } from 'antd';
import Logo from './media/logo.png'
import Quote from './Quote'

const { Header, Content, Footer } = Layout;


class Main extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>

            <a href='https://github.com/asmaamirkhan/AsmaaQuote' target='_blank'>
              <img alt='image' src={Logo} style={{ height: '40px' }} />
            </a>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px', float: "right" }}
            >
              <Menu.Item key="1">Main</Menu.Item>
              <Menu.Item key="2">Other</Menu.Item>
              <Menu.Item key="3">About</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '50px 50px', marginTop: 64 }}>
            <Quote title='ship' category='mot' quote='hi hi' />
          </Content>
          <Footer style={{ textAlign: 'center' }}>AsmaaQuote Project ©2019 Created by Asmaa Mirkhan</Footer>
        </Layout>
      </div>
    );
  }
}

export default Main;
