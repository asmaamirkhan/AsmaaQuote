/*
  author: Asmaa Mirkhan ~ 2019
*/

import React, { Component } from 'react';
import { Layout, Row, Col, BackTop } from 'antd';
import Quote from './Quote';
import { withRouter } from 'react-router';
import '../styles/style.css';
import { FaArrowCircleUp } from "react-icons/fa";
import Categories from './data/categories';

const { Content } = Layout;

class PageContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: this.props.category,
      quotes: [],
      cat_info: Categories[0]
    }
  }

  shuffleQuotes = (quotes) => {
    for (let i = quotes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [quotes[i], quotes[j]] = [quotes[j], quotes[i]];
    }
    return quotes;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.category != '') {
      this.setState({ quotes: require('./data/'.concat((this.props.category).toLowerCase())), category: this.props.category });
      let index = Categories.findIndex(obj => obj.title == this.props.category);
      this.setState({ cat_info: Categories[index] });
    }
  }


  render() {
    return (
      <Content style={{ padding: '20px 25px', marginTop: 64 }}>
        <BackTop>
          <FaArrowCircleUp size='3em' color='#1890FF' />
        </BackTop>
        <Row gutter={12} type='flex'>

          {

            this.shuffleQuotes(this.state.quotes).map((item, key) => {
              return (
                <Col xs={24} sm={12} md={12} lg={8} xl={6} style={{ marginTop: 16 }}>
                  <Quote title={item.title} category={item.category} quote={item.content} author={item.author} catInfo={this.state.cat_info} />
                </Col>
              )
            })
          }
        </Row>

      </Content>

    );
  }
}

export default withRouter(PageContent);
