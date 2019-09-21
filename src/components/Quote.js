// author: Asmaa Mirkhan ~ 2019
import React, { Component } from 'react';
import { FaRegStar } from "react-icons/fa";
import { Card,Divider } from 'antd';
import '../styles/style.css';
const { Meta } = Card;

class Quote extends Component {
  render() {
    return (
      
        <Card style={{ width: 300, marginTop: 16 }}  >
          <Meta
            title={this.props.title}
            avatar={
              <FaRegStar size='3em' color='#1890FF' />
            }
            description={this.props.category}
          />
          <Divider />
          <p style={{fontSize: 'large'}}>{this.props.quote}</p>
          <Divider style={{fontSize: 'x-small'}} >{this.props.author}</Divider>          
        </Card>
      
    );
  }
}

export default Quote;
