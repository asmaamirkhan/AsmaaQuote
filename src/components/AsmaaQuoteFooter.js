/* 
  author: Asmaa Mirkhan ~ 2019
*/

import React, { Component } from "react";
import { Layout } from "antd";

const { Footer } = Layout;

class AsmaaQuoteFooter extends Component {
  render() {
    return (
      <Footer style={{ textAlign: "center" }}>
        <a
          href="https://github.com/asmaamirkhan/AsmaaQuote"
          target="_blank"
          style={{ color: "#560027" }}
        >
          🦋 AsmaaQuote Project {" "}
        </a>
         ©2020 Made with 💖 by {" "}
        <a
          href="https://www.linkedin.com/in/asmaamirkhan/"
          target="_blank"
          style={{ color: "#560027" }}
        >
          Asmaa Mirkhan
        </a>
      </Footer>
    );
  }
}

export default AsmaaQuoteFooter;
