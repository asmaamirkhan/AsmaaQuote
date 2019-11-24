/* 
  author: Asmaa Mirkhan ~ 2019
*/

import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../styles/style.css';
import { Layout } from 'antd';
import PageContent from './PageContent';
import Categories from './data/categories';
import MyMenu from './MyMenu';

const { Footer } = Layout;

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      visible: false,
      category: Categories[0].title,
      titles: Categories.map(value => value.title),
      index: 0
    }

  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  componentDidMount() {
    this.setState({ category: this.props.history.location.pathname.replace('/', '') }, () => {
      let index = this.state.titles.indexOf(this.state.category)
      if (index < 0 || this.state.category == '') {
        this.setState({ category: Categories[0].title, redirect: true, index: 0 }, () => {
          if (this.state.redirect)
            this.props.history.push('/');
        });
      } else {
        this.setState({ index: index })
      }
    })
    this.props.history.listen((location, action) => {
      this.setState({ category: this.props.history.location.pathname.replace('/', '') }, () => {
        let index = this.state.titles.indexOf(this.state.category)
        console.log(index, this.state.category)
        if (index < 0 || this.state.category == '') {
          this.setState({ category: Categories[0].title, redirect: true, index: 0 });
        } else {
          this.setState({ index: index })
        }
      })
    })
  }

  render() {
    return (
      <div>
        <Layout>

          <MyMenu default={this.state.index} />

          <PageContent category={this.state.category} />

          <Footer style={{ textAlign: 'center' }}>AsmaaQuote Project ©2019 Made with ❤ by <a href='https://www.linkedin.com/in/asmaamirkhan/' target='_blank'>Asmaa Mirkhan</a></Footer>
        </Layout>
      </div>
    );

  }
}

export default Main;
