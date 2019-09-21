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
            title="Ship in harbor 🎈"
            avatar={
              <FaRegStar size='3em' color='#1890FF' />
            }
            description="Motivation"
          />
          <Divider />
          <p class = 'qoute' style={{fontSize: 'large'}}>A ship in harbor is safe, but that is not what ships are built for.</p>
        </Card>
      
    );
  }
}

export default Quote;
