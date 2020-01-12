/* 
  author: Asmaa Mirkhan ~ 2019
*/

import React, { Component } from "react";
import { Card, Divider, Tag, Icon } from "antd";

import Colors from './media/card_colors';

const { Meta } = Card;

class AsmaaQuoteComponent extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Card style={{ height: "100%", background: Colors[Math.floor(Math.random() * Colors.length)] }}>
        <Meta
          title={this.props.title}
          avatar={
            <Icon
              type={this.props.category.icon}
              style={{ fontSize: 45, color: this.props.category.color }}
            />
          }
          description={
            <div>
              <spam>Category: </spam>
              <Tag>{this.props.category.name}</Tag>
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
