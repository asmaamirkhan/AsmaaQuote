/* 
  author: Asmaa Mirkhan ~ 2019
*/

import React, { Component } from "react";
import { Layout, Col, Row, Switch, Divider } from "antd";
import AsmaaQuoteComponent from "./AsmaaQuoteComponent";
import { db } from "./firebase/config";

const { Content } = Layout;

class AsmaaQuoteContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({ quotes: [] }, () => {
      db.collection("quotes")
        .orderBy("date", "desc")
        .where("category", "==", this.props.category.name)
        .get()
        .then(data => {
          data.forEach(item => {
            this.setState({ quotes: [...this.state.quotes, item.data()] });
          });
        })
        .catch(error => {
          console.log(error);
        });
    });
  };

  toggleSwitch = (checked, e) => {
    if (checked)
      this.setState({ quotes: this.shuffleQuotes(this.state.quotes) });
    else this.fetchData();
  };

  shuffleQuotes = quotes => {
    for (let i = quotes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [quotes[i], quotes[j]] = [quotes[j], quotes[i]];
    }
    return quotes;
  };

  render() {
    return (
      <Content style={{ padding: "10px 25px", marginTop: 64 }}>
        <Divider orientation="right" style={{ color: "#000000" }}>
          <Switch
            checkedChildren="Shuffle 🤹‍♀️"
            unCheckedChildren="Shuffle 🤹‍♀️"
            onClick={this.toggleSwitch}
          />
        </Divider>
        <Row gutter={12} type="flex">
          {this.state.quotes.map((item, key) => {
            return (
              <Col
                xs={24}
                sm={12}
                md={12}
                lg={8}
                xl={6}
                style={{ marginTop: 16 }}
              >
                <AsmaaQuoteComponent
                  title={item.title}
                  category={this.props.category}
                  quote={item.content}
                  author={item.author}
                />
              </Col>
            );
          })}
        </Row>
      </Content>
    );
  }
}

export default AsmaaQuoteContent;
