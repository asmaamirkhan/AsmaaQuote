/* 
  author: Asmaa Mirkhan ~ 2019
*/

import React, { Component } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";

import AsmaaQuoteMenu from "./AsmaaQuoteMenu";
import AsmaaQuoteContent from "./AsmaaQuoteContent";
import AsmaaQuoteFooter from "./AsmaaQuoteFooter";

class AsmaaQuoteMain extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Layout className="layout">
          <AsmaaQuoteMenu selected={this.props.selected} />
          <AsmaaQuoteContent category={this.props.category} />
          <AsmaaQuoteFooter />
        </Layout>
      </div>
    );
  }
}

export default AsmaaQuoteMain;
