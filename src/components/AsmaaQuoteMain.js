/* 
  author: Asmaa Mirkhan ~ 2019
*/

import React, { Component } from 'react';
import AsmaaQuoteMenu from './AsmaaQuoteMenu';
import AsmaaQuoteContent from './AsmaaQuoteContent';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Content, Footer } = Layout;

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
                <Layout className="layout">
                    <AsmaaQuoteMenu />
                   <AsmaaQuoteContent category={this.props.category}/>
                    <Footer style={{ textAlign: 'center' }}>
                        AsmaaQuote Project ©2019 Made with ❤ by <a href='https://www.linkedin.com/in/asmaamirkhan/' target='_blank'>Asmaa Mirkhan</a>
                    </Footer>
                </Layout>
            </div>
        );

    }
}

export default AsmaaQuoteMain;