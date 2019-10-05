/* 
  author: Asmaa Mirkhan ~ 2019
*/
import React, { Component } from 'react';

import 'antd/dist/antd.css';
import '../styles/style.css';
import { Layout } from 'antd';

import MyMenu from './MyMenu';
const { Footer } = Layout;


class About extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }

  }



  render() {
    return (
      <div>
        <Layout>

          <MyMenu default={3} />


          <Footer style={{ textAlign: 'center' }}>AsmaaQuote Project ©2019 Made with ❤ by <a href='https://www.linkedin.com/in/asmaa-mirkhan/' target='_blank'>Asmaa Mirkhan</a></Footer>
        </Layout>
      </div>
    );

  }
}

export default About;
