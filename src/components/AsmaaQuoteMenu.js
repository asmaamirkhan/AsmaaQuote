/* 
  author: Asmaa Mirkhan ~ 2019
*/

import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import Categories from './media/categories';
import Logo from './media/AsmaaQuoteLogo.png';
import { Link } from 'react-router-dom';

const { Header } = Layout;

class AsmaaQuoteMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    componentDidMount() {

    }



    render() {
        console.log(Categories.length)
        return (
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>

                <a href='https://github.com/asmaamirkhan/AsmaaQuote' target='_blank'>
                    <img alt='AsmaaQuoteLogo' src={Logo} style={{ height: '40px'}} />
                </a>

                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={this.props.selected.toString()}
                    style={{ lineHeight: '64px',  float: 'right' }}
                >

                    {
                        Categories.map((item, key) => {
                            return (<Menu.Item key={key}><Link to={'/' + item.name}> {item.name}</Link></Menu.Item>)
                        })
                    }
                    <Menu.Item key={Categories.length+1}><Link to={'/About'}>About</Link></Menu.Item>
                </Menu>
            </Header>
        );

    }
}

export default AsmaaQuoteMenu;