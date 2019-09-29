/*
  author: Asmaa Mirkhan ~ 2019
*/
import React, { Component } from 'react';
import { Card,Divider, Tag, Icon} from 'antd';
import '../styles/style.css';
import Categories from './data/categories';
const { Meta } = Card;

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['#f8ecf8', '#ecf8f6', '#faeeea', '#f3eafa', '#fafaea'],
      icon:'heart',
      category: Categories[this.props.categoryId]
    }
  }

  componentDidMount(){
    //console.log(this.props.categoryId)
    //console.log(this.props)
    //this.setState({category: Categories[this.props.categoryId]})
  }

  componentWillUpdate() {
    
    console.log(this.props)
    console.log(this.state)
  }

  render() {
    
    return (
      
        <Card style={{  height:'100%', background: this.state.colors[Math.floor(Math.random() * 5)]  }}  >
          <Meta
            title={this.props.title}
            avatar={
              <Icon type={Categories[this.props.categoryId].icon} style={{fontSize: 45, color: Categories[this.props.categoryId].solidColor }}  />
            }
            description={<div><spam>Category: </spam><Tag color={Categories[this.props.categoryId].color}>{Categories[this.props.categoryId].title}</Tag></div>}
          />
          
          <Divider />
          <p style={{fontSize: 'large'}}>{this.props.quote}</p>
          <Divider style={{fontSize: 'x-small'}} >{this.props.author}</Divider>          
        </Card>
      
    );
  }
}

export default Quote;
