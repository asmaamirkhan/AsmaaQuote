/* 
  author: Asmaa Mirkhan ~ 2019
*/

import React, { Component } from "react";
import { Layout, Row, Col, BackTop, Card } from "antd";
import { FaArrowCircleUp, FaCode } from "react-icons/fa";
import { GiButterfly } from "react-icons/gi";
import ReactMarkdown from "react-markdown";

import Logo from "./media/AsmaaQuoteLogo100px.png";
import AsmaaQuoteMenu from "./AsmaaQuoteMenu";
import AsmaaQuoteFooter from "./AsmaaQuoteFooter";
import AboutStrings from "./media/AsmaaQuoteAboutStrings";

const { Content } = Layout;

class ComponentTemplate extends Component {

  render() {
    return (
      <div>
        <Layout className="layout">
          <AsmaaQuoteMenu selected={this.props.selected} />
          <Content id="about_content" style={{ padding: "50px 75px", marginTop: 64 }}>
            <BackTop>
              <FaArrowCircleUp size="3em" color="#1890FF" />
            </BackTop>

            <Row gutter={12} type="flex">
              <Col
                xs={24}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                style={{ marginTop: 16, display: "flex" }}
              >
                <img
                  alt="image"
                  src={Logo}
                  style={{ height: "100px", margin: "auto" }}
                />
              </Col>

              <Col
                xs={24}
                sm={18}
                md={18}
                lg={18}
                xl={18}
                style={{ marginTop: 16 }}
              >
                <Card
                  title={AboutStrings.AboutProjectQuestion}
                  bordered={true}
                  style={{ background: "#f2e6ff" }}
                >
                  <p>
                    <ReactMarkdown source={AboutStrings.AboutProject} />
                  </p>
                </Card>
              </Col>
            </Row>

            <Row gutter={12} type="flex">
              <Col
                xs={24}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                style={{ marginTop: 16, display: "flex" }}
              >
                <GiButterfly
                  size="6em"
                  color="#FFFFFF"
                  style={{
                    border: "2px solid #FF9C08",
                    borderRadius: "50px",
                    padding: "20px",
                    background: "#FF9C08",
                    margin: "auto"
                  }}
                />
              </Col>

              <Col
                xs={24}
                sm={18}
                md={18}
                lg={18}
                xl={18}
                style={{ marginTop: 16 }}
              >
                <Card
                  title={AboutStrings.AboutAsmaaQuestion}
                  bordered={true}
                  style={{ background: "#ffe4f1" }}
                >
                  <p>
                    <ReactMarkdown source={AboutStrings.AboutAsmaa} />
                  </p>
                </Card>
              </Col>
            </Row>

            <Row gutter={12} type="flex">
              <Col
                xs={24}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                style={{ marginTop: 16, display: "flex" }}
              >
                <FaCode
                  size="6em"
                  color="#FFFFFF"
                  style={{
                    border: "2px solid #131E66",
                    borderRadius: "50px",
                    padding: "20px",
                    background: "#131E66",
                    margin: "auto"
                  }}
                />
              </Col>

              <Col
                xs={24}
                sm={18}
                md={18}
                lg={18}
                xl={18}
                style={{ marginTop: 16 }}
              >
                <Card
                  title={AboutStrings.AboutProjectTechnicalQuestion}
                  bordered={true}
                  style={{ background: "#e2f1ff" }}
                >
                  <p>
                    <ReactMarkdown
                      source={AboutStrings.AboutProjectTechnical}
                    />
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