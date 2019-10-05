/* 
  author: Asmaa Mirkhan ~ 2019
*/

import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../styles/style.css';
import { Layout, Row, Col, BackTop, Card } from 'antd';
import { FaArrowCircleUp, FaCode } from "react-icons/fa";
import MyMenu from './MyMenu';
import Logo from './media/logo.png'
import MDReactComponent from 'markdown-react-js';
import { GiButterfly } from "react-icons/gi";

const { Content, Footer } = Layout;

class About extends Component {

  render() {
    return (
      <div>
        <Layout style={{background: 'white'}}>

          <MyMenu default={3} />
          <Content style={{ padding: '50px 75px', marginTop: 64 }}>
            <BackTop>
              <FaArrowCircleUp size='3em' color='#1890FF' />
            </BackTop>
            
            <Row gutter={12} type='flex'>
              
              <Col xs={24} sm={6} md={6} lg={6} xl={6} style={{ marginTop: 16 }} >
                <img alt='image' src={Logo} style={{ height: '100px'}} />
              </Col>

              <Col xs={24} sm={18} md={18} lg={18} xl={18} style={{ marginTop: 16 }} >

                <Card title="What is AsmaaQuote? 👼" bordered={true} style={{background: '#f8ecf8'}} >
                <p>
                  <MDReactComponent text='
                    **AsmaaQuote** is the quote manager of [Asmaa 🦋](https://www.linkedin.com/in/asmaa-mirkhan/) where she 
                    shares quotes that she likes and writes. quotes at AsmaaQuote will be updated as Asmaa writes or learns new 
                    quotes 👩‍🏫. **STAY TUNED** 🎉
                  ' /> 
                </p>

                </Card>
              </Col>

            </Row>

            <Row gutter={12} type='flex'>
              
              <Col xs={24} sm={6} md={6} lg={6} xl={6} style={{ marginTop: 16 }} >
                <GiButterfly size ='6em' color='#FFFFFF' style={{ border: '2px solid #FF9C08', borderRadius: '50px' , padding:'20px', background: '#FF9C08' }} />
              </Col>

              <Col xs={24} sm={18} md={18} lg={18} xl={18} style={{ marginTop: 16 }} >

                <Card title="Who is Asmaa? 🦋" bordered={true} style={{background: '#faeeea'}} >
                <p>
                <MDReactComponent text='
                    As a **life position** I am just a learner 🤔 who wants to learn continuously, no matter about what, 
                    I want to increase my knowledge and awareness by every useful information. At the same time I like 
                    to write my thoughts and due to that I created this small platform.
                    For my educational and professional info check my [LinkedIn profile 🙋‍♀️](https://www.linkedin.com/in/asmaa-mirkhan/).
                  ' /> 
                </p>

                </Card>
              </Col>

            </Row>

            <Row gutter={12} type='flex'>
              
              <Col xs={24} sm={6} md={6} lg={6} xl={6} style={{ marginTop: 16 }} >
                <FaCode size ='6em' color='#FFFFFF' style={{ border: '2px solid #131E66', borderRadius: '50px' , padding:'20px', background: '#131E66' }} />
              </Col>

              <Col xs={24} sm={18} md={18} lg={18} xl={18} style={{ marginTop: 16 }} >

                <Card title="What is AsmaaQuote? (I am a programmer 👩‍💻)" bordered={true} style={{background: '#ecf8f6'}} >
                <p>
                  <MDReactComponent text='
                    **AsmaaQuote** is an open-source 💖✨ quote manager made by 
                    [Asmaa](https://github.com/asmaamirkhan) using:' /> 
                  <MDReactComponent text='* ReactJS ⚛'/>
                  <MDReactComponent text='* AntDesign 🐜'/>
                  <MDReactComponent text='You can configure **AsmaaQuote** to create your own quote manager 
                  easily just by editing few lines of code 🤗, documentation is under development, it will 
                  be puplished on GitHub as it will be ready, wait for it! ⏰'/>
                   <MDReactComponent text='* Check out GitHub repo [here](https://github.com/asmaamirkhan/AsmaaQuote)🔍. '/>
                </p>

                </Card>
              </Col>

            </Row>

          </Content>
          <Footer style={{ textAlign: 'center' }}>AsmaaQuote Project ©2019 Made with ❤ by <a href='https://www.linkedin.com/in/asmaa-mirkhan/' target='_blank'>Asmaa Mirkhan</a></Footer>
        </Layout>
      </div>
    );

  }
}

export default About;
