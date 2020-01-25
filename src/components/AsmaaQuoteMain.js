/* 
  author: Asmaa Mirkhan ~ 2019
*/

import React, { Component } from "react";
import { Layout, BackTop } from "antd";
import { FaArrowCircleUp } from "react-icons/fa";
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
          <BackTop>
            <FaArrowCircleUp size="3em" color="#560027" />
          </BackTop>
          <AsmaaQuoteContent category={this.props.category} />
          <AsmaaQuoteFooter />
        </Layout>
      </div>
    );
  }
}

export default AsmaaQuoteMain;
