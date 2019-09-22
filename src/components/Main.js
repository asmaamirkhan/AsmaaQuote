// author: Asmaa Mirkhan ~ 2019
import React, { Component } from 'react';

import 'antd/dist/antd.css';
import '../styles/style.css';
import { Layout, Menu, Row, Col } from 'antd';

import Logo from './media/logo.png'
import Quote from './Quote'
import quoteList from './data/quotes'

const { Header, Content, Footer } = Layout;


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    }
  }

  componentDidMount() {
    console.log(quoteList)
  }

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
          <Content style={{ padding: '50px 25px', marginTop: 64 }}>
            <Row gutter={10} type='flex'>
              
              <Col xs={24} sm={12} md={12} lg={8} xl={6} style={{marginTop: 16}} >
                <Quote title='Ship in harbor 🎈' category='Motivation' quote='A ship in harbor is safe, but that is not what ships are built for.' author='Asmaa' />
              </Col>
              <Col xs={24} sm={12} md={12} lg={8} xl={6} style={{marginTop: 16}}>
                <Quote title='Ship in harbor 🎈' category='Motivation' quote='A ship in harbor is safe, but that is not what ships are built for.' author='Asmaa' />
              </Col>
              <Col xs={24} sm={12} md={12} lg={8} xl={6} style={{marginTop: 16}}>
                <Quote title='Ship in harbor 🎈' category='Motivation' quote='A ship in harbor is safe, but that is not what ships are built for.' author='Asmaa' />
              </Col>
              <Col xs={24} sm={12} md={12} lg={8} xl={6} style={{marginTop: 16}}>
                <Quote title='Ship in harbor 🎈' category='Motivation' quote='A ship in harbor is safe, but that is not what ships are built for.' author='Asmaa' />
              </Col>
              <Col xs={24} sm={12} md={12} lg={8} xl={6} style={{marginTop: 16}}>
                <Quote title='Ship in harbor 🎈' category='Motivation' quote='A ship in harbor is safe, but that is not what ships are built for.' author='Asmaa' />
              </Col>
              <Col xs={24} sm={12} md={12} lg={8} xl={6} style={{marginTop: 16}}>
                <Quote title='Ship in harbor 🎈' category='Motivation' quote='A ship in harbor is safe, but that is not what ships areA ship in harbor is safe, but that is not what ships are built for.' author='Asmaa' />
              </Col>
            </Row>
            
          </Content>
          <Footer style={{ textAlign: 'center' }}>AsmaaQuote Project ©2019 Created by <a href='https://www.linkedin.com/in/asmaa-mirkhan/' target='_blank'>Asmaa Mirkhan</a></Footer>
        </Layout>
      </div>
    );
  }
}

export default Main;
