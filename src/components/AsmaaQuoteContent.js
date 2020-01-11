/* 
  author: Asmaa Mirkhan ~ 2019
*/

import React, { Component } from "react";
import { Layout, Col, Row } from "antd";
import AsmaaQuoteComponent from "./AsmaaQuoteComponent";

import Data from "../temp/myquotes";

const { Content } = Layout;

class AsmaaQuoteContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    };
  }

  componentDidMount() {
    this.setState({ quotes: Data });
  }

  render() {
    return (
      <Content style={{ padding: "10px 25px", marginTop: 64 }}>
        <Row gutter={12} type="flex">
          {this.state.quotes.map((item, key) => {
            return (
              <Col
                xs={24}
                sm={12}
                md={12}
                lg={8}
                xl={6}
                style={{ marginTop: 16 }}
              >
                <AsmaaQuoteComponent
                  title={item.title}
                  category={item.category}
                  quote={item.content}
                  author={item.author}
                />
              </Col>
            );
          })}
        </Row>
      </Content>
    );
  }
}

export default AsmaaQuoteContent;
