/* 
  author: Asmaa Mirkhan ~ 2021
*/

import React, { Component } from "react";
import { Layout, Row, Col, BackTop, Tabs, Divider, Switch } from "antd";
import { FaArrowCircleUp } from "react-icons/fa";
import { HeartOutlined, TranslationOutlined } from '@ant-design/icons';

import AsmaaQuoteMenu from "./AsmaaQuoteMenu";
import AsmaaQuoteFooter from "./AsmaaQuoteFooter";
import { db } from "./firebase/config";
import Firebase from 'firebase';
import Colors from "./media/card_colors";

const { Content } = Layout;
const { TabPane } = Tabs;

class AsmaaQuoteKhawater extends Component {
    constructor() {
        super()
        this.state = {
            showLoadingBar: "block",
            quotes: []
        }
    }
    generateRandom = () => {
        return Math.floor(Math.random() * Colors.length);
        //this.setState({colorIndex: color })
    };
    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        this.setState({ quotes: [] }, () => {
            db.collection("quotes")
                .orderBy("date", "desc")
                .where("category", "==", "Khawater")
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
                        <Row gutter={12} type="flex">
                            {
                                this.state.quotes.map((item, key) => {
                                    return (
                                        <Col
                                            xs={24}
                                            sm={24}
                                            md={24}
                                            lg={24}
                                            xl={24}
                                            style={{ marginTop: 16 }}
                                        >
                                            <Tabs defaultActiveKey="1"
                                                type="card"
                                                centered
                                                size="large"
                                                style={{ border: "3px solid #f8ebff", borderRadius: "5px", "padding": "10px 20px" }}>
                                                <TabPane
                                                    tab={
                                                        <span><HeartOutlined />Arabic </span>
                                                    }
                                                    key="1"
                                                >
                                                    <p style={{ "direction": "rtl" }} > {item.content_ar} </p>
                                                </TabPane>
                                                <TabPane
                                                    tab={
                                                        <span><TranslationOutlined /> English </span>
                                                    }
                                                    key="2"
                                                >
                                                    {item.content_eng}
                                                </TabPane>
                                            </Tabs>
                                        </Col>
                                    );
                                })}
                        </Row>
                    </Content>
                    <AsmaaQuoteFooter />
                </Layout>
            </div >
        );
    }
}

export default AsmaaQuoteKhawater;
