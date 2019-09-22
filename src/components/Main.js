// author: Asmaa Mirkhan ~ 2019

import React, { Component } from 'react';

import 'antd/dist/antd.css';
import '../styles/style.css';
import { Layout, Menu } from 'antd';

import Logo from './media/logo.png'
import PageContent from './PageContent';
import { NavLink, Link, Redirect } from "react-router-dom";

const { Header, Footer } = Layout;


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      categoryi:  this.props.location.pathname.replace('/',''),
      category:  this.props.history.location.pathname.replace('/','')
    }
    
  }

  componentDidMount(){
    console.log(this.state)

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
              <Menu.Item key="1"><NavLink to={'/Motivation'}>Motivation</NavLink></Menu.Item>
              <Menu.Item key="2"><NavLink to={'/Life'}>Life</NavLink></Menu.Item>
              <Menu.Item key="3"><NavLink to={'/MyQuotes'}>MyQuotes</NavLink></Menu.Item>
              <Menu.Item key="4"><NavLink to={'/About'}>About</NavLink></Menu.Item>
            </Menu>
          </Header>

          <PageContent category={this.state.category} />

          <Footer style={{ textAlign: 'center' }}>AsmaaQuote Project ©2019 Made with ❤ by <a href='https://www.linkedin.com/in/asmaa-mirkhan/' target='_blank'>Asmaa Mirkhan</a></Footer>
        </Layout>
      </div>
    );

  }
}

export default Main;
