/* 
  author: Asmaa Mirkhan ~ 2019
*/

import React, { Component } from "react";
import { Layout, Row, Col, BackTop, Card } from 'antd';
import { FaArrowCircleUp, FaCode } from "react-icons/fa";
import { GiButterfly } from "react-icons/gi";
import ReactMarkdown from 'react-markdown';

import Logo from './media/AsmaaQuoteLogo.png'
import AsmaaQuoteMenu from './AsmaaQuoteMenu';
import AsmaaQuoteFooter from './AsmaaQuoteFooter';
import AboutStrings from './media/AsmaaQuoteAboutStrings';

const { Content } = Layout;

class ComponentTemplate extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <Layout className="layout">
          <AsmaaQuoteMenu selected={this.props.selected} />
          <Content style={{ padding: '50px 75px', marginTop: 64 }}>
            <BackTop>
              <FaArrowCircleUp size='3em' color='#1890FF' />
            </BackTop>
            
            <Row gutter={12} type='flex'>
              
              <Col xs={24} sm={6} md={6} lg={6} xl={6} style={{ marginTop: 16 }} >
                <img alt='image' src={Logo} style={{ height: '100px'}} />
              </Col>

              <Col xs={24} sm={18} md={18} lg={18} xl={18} style={{ marginTop: 16 }} >

                <Card title={AboutStrings.AboutProjectQuestion} bordered={true} style={{background: '#f8ecf8'}} >
                <p>
                  <ReactMarkdown  source={AboutStrings.AboutProject} /> 
                </p>

                </Card>
              </Col>

            </Row>

            <Row gutter={12} type='flex'>
              
              <Col xs={24} sm={6} md={6} lg={6} xl={6} style={{ marginTop: 16 }} >
                <GiButterfly size ='6em' color='#FFFFFF' style={{ border: '2px solid #FF9C08', borderRadius: '50px' , padding:'20px', background: '#FF9C08' }} />
              </Col>

              <Col xs={24} sm={18} md={18} lg={18} xl={18} style={{ marginTop: 16 }} >

                <Card title={AboutStrings.AboutProjectQuestion} bordered={true} style={{background: '#faeeea'}} >
                <p>
                <ReactMarkdown  source={AboutStrings.AboutProject} /> 
                </p>

                </Card>
              </Col>

            </Row>

            <Row gutter={12} type='flex'>
              
              <Col xs={24} sm={6} md={6} lg={6} xl={6} style={{ marginTop: 16 }} >
                <FaCode size ='6em' color='#FFFFFF' style={{ border: '2px solid #131E66', borderRadius: '50px' , padding:'20px', background: '#131E66' }} />
              </Col>

              <Col xs={24} sm={18} md={18} lg={18} xl={18} style={{ marginTop: 16 }} >

                <Card title={AboutStrings.AboutProjectTechnicalQuestion} bordered={true} style={{background: '#ecf8f6'}} >
                <p>
                  <ReactMarkdown  source={AboutStrings.AboutProjectTechnical}/> 
                </p>

                </Card>
              </Col>

            </Row>

          </Content>
          <AsmaaQuoteFooter />
        </Layout>
      </div>
    );
  }
}

export default ComponentTemplate;
