/* 
  author: Asmaa Mirkhan ~ 2021
  TODO: move strings to firebase and make the structure dynamic 🙄
*/

import React, { Component } from "react";
import { Layout, Row, Col, BackTop, Card } from "antd";
import { FaArrowCircleUp, FaCode, FaMagic, FaPodcast, FaCertificate } from "react-icons/fa";
import { GiButterfly } from "react-icons/gi";
import ReactMarkdown from "react-markdown";

import Logo from "./media/AsmaaQuoteLogo100px.png";
import AsmaaQuoteMenu from "./AsmaaQuoteMenu";
import AsmaaQuoteFooter from "./AsmaaQuoteFooter";
import AboutStrings from "./media/AsmaaQuoteAboutStrings";

const { Content } = Layout;

class AsmaaQuoteAbout extends Component {

  render() {
    return (
      <div>
        <Layout className="layout">
          <AsmaaQuoteMenu selected={this.props.selected} />
          <Content
            id="about_content"
            style={{ padding: "50px 75px", marginTop: 64 }}
          >
            <BackTop>
              <FaArrowCircleUp size="3em" color="#560027" />
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
                  alt="AsmaaQuote Logo"
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
                  style={{ background: "#f2e6ff", border: "2px solid #e7cfff" }}
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
                  style={{ background: "#ffe6d1", border: "2px solid #ffcfab" }}
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
                <FaMagic
                  size="6em"
                  color="#FFFFFF"
                  style={{
                    border: "2px solid #560027",
                    borderRadius: "50px",
                    padding: "20px",
                    background: "#560027",
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
                  title={AboutStrings.AboutAsmaaQuestionPersonal}
                  bordered={true}
                  style={{ background: "#ffe4f1", border: "2px solid #ffcce5" }}
                >
                  <p>
                    <ReactMarkdown
                      source={AboutStrings.AboutAsmaaPersonal}
                    />
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
                  title={AboutStrings.AboutAsmaaQuestionTech}
                  bordered={true}
                  style={{ background: "#e2f1ff", border: "2px solid #cde9ff" }}
                >
                  <p>
                    <ReactMarkdown
                      source={AboutStrings.AboutAsmaaTech}
                    />
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
                <FaPodcast
                  size="6em"
                  color="#FFFFFF"
                  style={{
                    border: "2px solid #bfbfbf",
                    borderRadius: "50px",
                    padding: "20px",
                    background: "#bfbfbf",
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
                  title={AboutStrings.AboutAsmaaQuestionImportance}
                  bordered={true}
                  style={{ background: "#f3eafa", border: "2px solid #e1dfdd" }}
                >
                  <p>
                    <ReactMarkdown
                      source={AboutStrings.AboutAsmaaImportance}
                    />
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
                <FaCertificate
                  size="6em"
                  color="#FFFFFF"
                  style={{
                    border: "2px solid #560027",
                    borderRadius: "50px",
                    padding: "20px",
                    background: "#560027",
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
                  title={AboutStrings.AboutAsmaaQuestionGallery}
                  bordered={true}
                  style={{ background: "#ffe4f1", border: "#ffcce5" }}
                >
                  <p>
                    <ReactMarkdown
                      source={AboutStrings.AboutAsmaaGallery}
                    />
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
                  title={AboutStrings.AboutAsmaaQuestionButterflies}
                  bordered={true}
                  style={{ background: "#ffe6d1", border: "2px solid #ffcfab" }}
                >
                  <p>
                    <ReactMarkdown
                      source={AboutStrings.AboutAsmaaButterflies}
                    />
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
                  style={{ background: "#e2f1ff", border: "2px solid #cde9ff" }}
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

export default AsmaaQuoteAbout;
