/*
  author: Asmaa Mirkhan ~ 2019
*/
import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import Quote from './Quote';
import { withRouter } from 'react-router'
const { Content } = Layout;
class PageContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      quotes: [],
      category: this.props.category,
      path: (this.props.category).toLowerCase(),
      categories: require('./data/categories')
    }

  }

  componentWillUpdate() {
    console.log('new')


  }

  componentDidMount() {

    this.props.history.listen((location, action) => {
      this.setState({
        path: this.props.history.location.pathname.replace('/', '').toLowerCase(),
        category: this.props.history.location.pathname.replace('/', '')
      }, () => {
        if (this.state.categories.indexOf(this.state.category) >= 0 || this.state.category == '') {
          if (this.state.category) {
            this.setState({ quotes: require('./data/'.concat(this.state.path)) });

          } else {
            this.setState({ quotes: require('./data/motivation') });

          }
        }
        else {
          this.props.history.push('/');
        }
      })


    });
    if (this.state.categories.indexOf(this.state.category) >= 0 || this.state.category == '') {
      if (this.state.category) {
        this.setState({ quotes: require('./data/'.concat(this.state.path)) });

      } else {
        this.setState({ quotes: require('./data/motivation') });

      }
    }
    else {
      this.props.history.push('/');
      //document.location = '/'
    }

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

export default withRouter(PageContent);
