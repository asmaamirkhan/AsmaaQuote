// author: Asmaa Mirkhan ~ 2019
import React, { Component } from 'react';

import { Layout, Row, Col } from 'antd';
import quoteList from './data/quotes';

import Quote from './Quote'

const { Content } = Layout;
class PageContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    }
  }

  componentDidMount() {
    this.setState({ quotes: quoteList });
  }

  render() {
    return (

      <Content style={{ padding: '50px 25px', marginTop: 64 }}>
        <Row gutter={10} type='flex'>

          {
            this.state.quotes.map((item, key) => {
              return (
                <Col xs={24} sm={12} md={12} lg={8} xl={6} style={{ marginTop: 16 }}>
                  <Quote title={item.title} category={item.category} quote={item.content} author={item.author} />
                </Col>
              )
            })
          }
        </Row>

      </Content>

    );
  }
}

export default PageContent;
