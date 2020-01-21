/* 
  author: Asmaa Mirkhan ~ 2019
*/

import React, { Component } from "react";
import { Layout } from 'antd';

const { Footer } = Layout;

class AsmaaQuoteFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Footer style={{ textAlign: "center" }}>
        AsmaaQuote Project ©2019 Made with 💖 by {" "}
        <a href="https://www.linkedin.com/in/asmaamirkhan/" target="_blank">
          Asmaa Mirkhan
        </a>
      </Footer>
    );
  }
}

export default AsmaaQuoteFooter;
