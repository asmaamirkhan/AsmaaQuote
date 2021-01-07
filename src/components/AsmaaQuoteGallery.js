/* 
  author: Asmaa Mirkhan ~ 2019
*/

import React, { Component } from "react";
import { Layout, Row, Col, BackTop, Image, Divider, Switch } from "antd";
import { FaArrowCircleUp } from "react-icons/fa";

import AsmaaQuoteMenu from "./AsmaaQuoteMenu";
import AsmaaQuoteFooter from "./AsmaaQuoteFooter";
import { db } from "./firebase/config";
import Firebase from 'firebase';
import { SyncOutlined } from '@ant-design/icons';

const { Content } = Layout;
const storage = Firebase.storage().ref();

class AsmaaQuoteGallery extends Component {
  constructor() {
    super()
    this.state = {
      showLoadingBar: "block",
      urls: []
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    db.collection("quoteimage")
      .get()
      .then(data => {

        let urls = []
        data.forEach(item => {
          let obj = { "date": item.data()["date"] };
          storage.child(`quotephoto/${item.data()["filename"]}`).getDownloadURL().then((url) => {
            obj["url"] = url;
            urls = [...urls, obj]
            if (data.size === urls.length) {
              this.setState({
                showLoadingBar: "none",
                urls: urls.sort((a, b) => (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0))
              })
            }
          }).catch((error) => {
            console.log(error);
          })
        })
      }).catch(error => {
        console.log(error);
      });
  };

  toggleSwitch = (checked, e) => {
    if (checked)
      this.setState({ urls: this.shuffleUrls(this.state.urls) });
    else this.fetchData();
  };

  shuffleUrls = urls => {
    for (let i = urls.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [urls[i], urls[j]] = [urls[j], urls[i]];
    }
    return urls;
  };
  render() {
    console.log("r")
    return (
      <div>
        <Layout className="layout">
          <AsmaaQuoteMenu selected={this.props.selected} />
          <Content
            id="about_content"
            style={{ padding: "25px 75px", marginTop: 64 }}
          >
            <Divider orientation="right" style={{ color: "#000000" }}>
              <Switch
                checkedChildren="Shuffle 🤹‍♀️"
                unCheckedChildren="Shuffle 🤹‍♀️"
                onClick={this.toggleSwitch}
              />
            </Divider>
            <BackTop>
              <FaArrowCircleUp size="3em" color="#560027" />
            </BackTop>
            <SyncOutlined spin style={{ display: this.state.showLoadingBar, fontSize: 50, color: "#560027" }} />
            <Row gutter={12} type="flex">
              {
                this.state.urls.map((item, key) => {
                  return (
                    <Col
                      xs={24}
                      sm={12}
                      md={8}
                      lg={8}
                      xl={6}
                      style={{ marginTop: 16 }}
                    >
                      <Image
                        src={item["url"]}
                      />
                    </Col>
                  );
                })}
            </Row>
          </Content>
          <AsmaaQuoteFooter />
        </Layout>
      </div>
    );
  }
}

export default AsmaaQuoteGallery;
