/* 
  author: Asmaa Mirkhan ~ 2019
*/

import React, { Component } from "react";
import { Card, Divider, Tag, Icon } from "antd";

import Colors from "./media/card_colors";

const { Meta } = Card;

class AsmaaQuoteComponent extends Component {

  generateRandom = () => {
    return Math.floor(Math.random() * Colors.length);
    //this.setState({colorIndex: color })
  };

  render() {
    var colorIndex = this.generateRandom();
    return (
      <Card
        style={{
          height: "100%",
          background: Colors[colorIndex].background,
          border: "2px solid " + Colors[colorIndex].border,
          borderRadius: "2%"
        }}
      >
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
              <Tag color={this.props.category.tagColor}>
                {this.props.category.name}
              </Tag>
            </div>
          }
        />

        <Divider
          style={{ background: Colors[colorIndex].border, height: "2px" }}
        />
        <p style={{ fontSize: "large" }}>{this.props.quote}</p>
        <Divider
          style={{
            fontSize: "x-small"
          }}
        >
          {this.props.author}
        </Divider>
      </Card>
    );
  }
}

export default AsmaaQuoteComponent;
