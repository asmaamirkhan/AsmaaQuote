/* 
  author: Asmaa Mirkhan ~ 2019
*/

import React, { Component } from 'react';
import AsmaaQuoteComponent from './AsmaaQuoteComponent';
import { Layout, Menu, Breadcrumb } from 'antd'; 
const { Content, Footer } = Layout;
class AsmaaQuoteContent extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    componentDidMount() {
        
    }



    render() {
        return (
            <Content style={{ padding: '0 50px' }}>

<AsmaaQuoteComponent title='title' category='cat' quote='quote' cat_info='info' />
        </Content>
           
        );

    }
}

export default AsmaaQuoteContent;