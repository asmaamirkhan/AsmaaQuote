/* 
  author: Asmaa Mirkhan ~ 2019
*/

import React, { Component } from "react";
import { Card, Divider, Tag, Typography } from "antd";
import { StarOutlined, HeartOutlined, CoffeeOutlined, MessageOutlined } from '@ant-design/icons';
import Colors from "./media/card_colors";

const { Meta } = Card;
const { Text } = Typography;

class AsmaaQuoteComponent extends Component {

  generateRandom = () => {
    return Math.floor(Math.random() * Colors.length);
    //this.setState({colorIndex: color })
  };

  chooseIcon = (name, color) => {
    let iconStyle = { fontSize: 45, color: color }
    switch (name) {
      case "coffee":
        return <CoffeeOutlined style={iconStyle} />
      case "star":
        return <StarOutlined style={iconStyle} />
      case "heart":
        return <HeartOutlined style={iconStyle} />
      default:
        return <MessageOutlined style={iconStyle} />
    }
  }

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
            this.chooseIcon(this.props.category.icon, this.props.category.color)
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
        <Text style={{ fontSize: "medium" }}>{this.props.quote}</Text>
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
