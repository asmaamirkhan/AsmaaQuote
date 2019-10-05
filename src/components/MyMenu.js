/* 
  author: Asmaa Mirkhan ~ 2019
*/

import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../styles/style.css';
import { Layout, Menu, Drawer, Button } from 'antd';
import Logo from './media/logo.png'
import { NavLink, Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import Categories from './data/categories';

const { Header } = Layout;

class MyMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
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

  render() {

    console.log(this.state)
    return (
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>

        <a href='https://github.com/asmaamirkhan/AsmaaQuote' target='_blank'>
          <img alt='image' src={Logo} style={{ height: '40px' }} />
        </a>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[this.props.default.toString()]}
          style={{ lineHeight: '64px', float: "right" }}
          id='mainmenu'
        >
          {
            Categories.map((item, key) => {
              let path = '/' + item.title;
              return (
                <Menu.Item key={key}><NavLink to={path}>{item.title}</NavLink></Menu.Item>
              )
            })
          }

          <Menu.Item key={3} ><NavLink to={'/About'}>About</NavLink></Menu.Item>

        </Menu>

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['0']}
          style={{ float: "right" }}
          id='togglemenu'
        >

          <Button className="barsMenu" type="default" onClick={this.showDrawer} >
            <FaAlignJustify />
          </Button>
        </Menu>


        <Drawer
          title="Asmaa Quote"
          placement="top"
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <div>
            {
              Categories.map((item, key) => {
                let path = '/' + item.title;
                return (
                  <Link to={path} onClick={this.onClose}><p>{item.title}</p></Link>
                )
              })
            }
            <Link to='/About' onClick={this.onClose}><p>About</p></Link>
          </div>


        </Drawer>
      </Header>

    );

  }
}

export default MyMenu;
