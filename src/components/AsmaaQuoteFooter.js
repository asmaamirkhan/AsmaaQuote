/* 
  author: Asmaa Mirkhan ~ 2019
*/

import React, { Component } from "react";
import { Layout } from 'antd';

const { Footer } = Layout;

class AsmaaQuoteFooter extends Component {

  render() {
    return (
      <Footer style={{ textAlign: "center" }}>
        AsmaaQuote Project ©2019 Made with 💖 by {" "}
        <a href="https://www.linkedin.com/in/asmaamirkhan/" target="_blank" style={{color: '#560027'}}>
          Asmaa Mirkhan
        </a>
      </Footer>
    );
  }
}

export default AsmaaQuoteFooter;