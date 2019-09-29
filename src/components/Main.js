/* 
  author: Asmaa Mirkhan ~ 2019
*/
import React, { Component } from 'react';

import 'antd/dist/antd.css';
import '../styles/style.css';
import { Layout, Menu, Drawer, Button } from 'antd';

import Logo from './media/logo.png'
import PageContent from './PageContent';
import { NavLink, Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";

const { Header, Footer } = Layout;


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      categoryi: this.props.location.pathname.replace('/', ''),
      category: this.props.history.location.pathname.replace('/', ''),
      visible: false
    }

  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  componentDidMount() {
    //console.log(this.state)

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
              id='mainmenu'
            >
              <Menu.Item key="1"><NavLink to={'/Motivation'}>Motivation</NavLink></Menu.Item>
              <Menu.Item key="2"><NavLink to={'/Life'}>Life</NavLink></Menu.Item>
              <Menu.Item key="3"><NavLink to={'/MyQuotes'}>MyQuotes</NavLink></Menu.Item>
              <Menu.Item key="4"><NavLink to={'/About'}>About</NavLink></Menu.Item>
              
            </Menu>

            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{  float: "right" }}
              id='togglemenu'
            >
              
              <Button className="barsMenu" type="default"  onClick={this.showDrawer} >
                <FaAlignJustify/>
              </Button>
            </Menu>


            <Drawer
              title="Basic Drawer"
              placement="top"
              closable={true}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <div>
                <Link to='/Motivation' onClick={this.onClose}><p>Motivation</p></Link>
                <Link to='/Life' onClick={this.onClose}><p>Life</p></Link>
                <Link to='/MyQuotes' onClick={this.onClose}><p>MyQuotes</p></Link>
                <Link to='/About' onClick={this.onClose}><p>About</p></Link>
              </div>


            </Drawer>
          </Header>

          <PageContent category={this.state.category} />

          <Footer style={{ textAlign: 'center' }}>AsmaaQuote Project ©2019 Made with ❤ by <a href='https://www.linkedin.com/in/asmaa-mirkhan/' target='_blank'>Asmaa Mirkhan</a></Footer>
        </Layout>
      </div>
    );

  }
}

export default Main;
