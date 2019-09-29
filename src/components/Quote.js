/*
  author: Asmaa Mirkhan ~ 2019
*/
import React, { Component } from 'react';
import { Card,Divider, Tag, Icon} from 'antd';
import '../styles/style.css';
const { Meta } = Card;

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['#f8ecf8', '#ecf8f6', '#faeeea', '#f3eafa', '#fafaea'],
      icon:'heart'
    }
  }

  componentDidMount(){
    console.log(this.state)
  }

  componentWillUpdate() {
    console.log(this.props)
  }

  render() {
    
    return (
      
        <Card style={{  height:'100%', background: this.state.colors[Math.floor(Math.random() * 5)]  }}  >
          <Meta
            title={this.props.title}
            avatar={
              <Icon type={this.props.icon} style={{fontSize: 45, color:'#1890FF' }}  />
            }
            description={<div><spam>Category: </spam><Tag color="blue">{this.props.category}</Tag></div>}
          />
          
          <Divider />
          <p style={{fontSize: 'large'}}>{this.props.quote}</p>
          <Divider style={{fontSize: 'x-small'}} >{this.props.author}</Divider>          
        </Card>
      
    );
  }
}

export default Quote;
