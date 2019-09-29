/*
  author: Asmaa Mirkhan ~ 2019
*/
import React, { Component } from 'react';
import { Layout, Row, Col, BackTop } from 'antd';
import Quote from './Quote';
import { withRouter } from 'react-router';
import '../styles/style.css';
import { FaArrowCircleUp } from "react-icons/fa";

const { Content } = Layout;
class PageContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      quotes: [],
      category: this.props.category,
      path: (this.props.category).toLowerCase(),
      categories: require('./data/categories'),
      titles: [],
      icon: 'star'
    }

  }

  componentWillUpdate() {
    //console.log('new');
    console.log(this.state.titles)
  }

  componentDidMount() {
    this.setState({ titles: this.state.categories.map(value => value.title) })


    this.props.history.listen((location, action) => {
      this.setState({
        path: this.props.history.location.pathname.replace('/', '').toLowerCase(),
        category: this.props.history.location.pathname.replace('/', '')
      }, () => {
        let index = this.state.titles.indexOf(this.state.category);
        if (index >= 0 || this.state.category == '') {
          if (this.state.category) {
            this.setState({ quotes: require('./data/'.concat(this.state.path)), icon: this.state.categories[index].icon });

          } else {
            this.setState({ quotes: require('./data/motivation'), icon: 'FaRegStar' });
            console.log(this.state)
          }
        }
        else {
          this.props.history.push('/');
        }
      })


    });
    if (this.state.titles.indexOf(this.state.category) >= 0 || this.state.category == '') {
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
      <Content style={{ padding: '20px 25px', marginTop: 64 }}>
        <BackTop>
          <FaArrowCircleUp size='3em' color='#1890FF' />
        </BackTop>
        <Row gutter={12} type='flex'>

          {
            this.state.quotes.map((item, key) => {
              return (
                <Col xs={24} sm={12} md={12} lg={8} xl={6} style={{ marginTop: 16 }}>
                  <Quote title={item.title} category={item.category} quote={item.content} author={item.author} icon={this.state.icon} />
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
