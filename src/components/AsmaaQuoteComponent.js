/* 
  author: Asmaa Mirkhan ~ 2019
*/

import React, { Component } from "react";
import { Card, Divider, Tag, Icon } from "antd";

const { Meta } = Card;

class AsmaaQuoteComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Card style={{ height: "100%" }}>
        <Meta
          title={this.props.title}
          avatar={
            <Icon type='star' style={{ fontSize: 45 }} />
          }
          description={
            <div>
              <spam>Category: </spam>
              <Tag >{this.props.category}</Tag>
              
            </div>
          }
        />

        <Divider />
        <p style={{ fontSize: "large" }}>{this.props.quote}</p>
        <Divider style={{ fontSize: "x-small" }}>{this.props.author}</Divider>
      </Card>
    );
  }
}

export default AsmaaQuoteComponent;
